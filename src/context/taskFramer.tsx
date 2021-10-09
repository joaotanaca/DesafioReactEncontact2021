/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable camelcase */
import { useAnimation, useMotionValue } from "framer-motion";
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
} from "react";
import TTask from "src/interfaces/Task";
import { getHeight } from "src/lib/taskFramer";
import todos from "src/db";
import { storageGet, storageSet } from "src/lib/localStorage";

export type TTypeFunctionTask = "archive" | "unarchive" | "delete";

type TOnAdd = (index: TTask) => void;

type THandleChangeTask = (index: number, type: TTypeFunctionTask) => void;

interface TaskFramer {
    items: TTask[];
    controls: any;
    search: string;
    itemsFiltered: TTask[];
    completeTask: number;
    onAdd: TOnAdd;
    handleChangeTask: THandleChangeTask;
    handleSearch: (agr0: string) => void;
}

const STORAGE_KEY = "tasks";

const TaskFramerContext = createContext({} as TaskFramer);

export const useTaskFramer = () => useContext(TaskFramerContext);

export const TaskFramerProvider = ({ children }: { children?: ReactNode }) => {
    const [tasks, setTasks] = useState<TTask[]>([]);
    const [completeTask, setCompleteTask] = useState<number>(0);
    const [search, setSearch] = useState("");
    const controls = useAnimation();
    const y = useMotionValue(0);
    const scrollContainer = 150;
    let timeout: NodeJS.Timeout;

    const itemsFiltered = useMemo(
        () =>
            search
                ? tasks.filter(
                      (task) =>
                          task.title.includes(search) ||
                          task.description.includes(search),
                  )
                : tasks,
        [search, tasks],
    );

    useEffect(() => {
        setCompleteTask(tasks.filter((task) => task?.isDone).length);
    }, [tasks]);

    useEffect(() => {
        const storageTasks: TTask[] = storageGet(STORAGE_KEY) ?? [];
        const examples: boolean = storageGet("examples_verify");
        const queryUrl = new URLSearchParams(window.location.search).get("q");

        if (!storageTasks.length && !examples) {
            setTasks(todos);
            storageSet(STORAGE_KEY, todos);
            storageSet("examples_verify", true);
        } else {
            setTasks(storageTasks);
        }

        if (queryUrl) setSearch(queryUrl);
    }, []);

    const onAdd: TOnAdd = useCallback((task: TTask) => {
        setTasks((prev) => {
            const prevTasks = [...prev];
            prevTasks.push(task);
            storageSet(STORAGE_KEY, prevTasks);
            return prevTasks;
        });
    }, []);

    const handleSearch = (value: string) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSearch(value);
            window.history.replaceState(
                null,
                "",
                `${window.location.pathname}?q=${value}`,
            );
        }, 500);
    };

    const handleChangeTask: THandleChangeTask = useCallback(
        (index, type = "archive") => {
            const newItems = [...tasks];
            newItems.splice(index, 1);

            const newScrollHeight = getHeight(newItems);
            const bottomOffset = -y.get() + scrollContainer;
            const bottomWillBeVisible = newScrollHeight < bottomOffset;
            const isScrollHeightLarger = newScrollHeight >= scrollContainer;

            if (bottomWillBeVisible && isScrollHeightLarger) {
                controls.start({
                    y: -newScrollHeight + scrollContainer,
                    transition: { duration: 2 },
                });
            }

            setTasks((prev) => {
                let taskIndex = [...prev];
                switch (type) {
                    case "delete":
                        taskIndex = taskIndex.filter(
                            (_, _index) => _index !== index,
                        );
                        break;
                    case "unarchive":
                        taskIndex[index].isDone = false;
                        break;

                    default:
                        taskIndex[index].isDone = true;
                        break;
                }
                storageSet(STORAGE_KEY, taskIndex);
                return taskIndex;
            });
        },
        [controls, tasks, y],
    );

    return (
        <TaskFramerContext.Provider
            value={{
                controls,
                completeTask,
                search,
                itemsFiltered,
                handleSearch,
                items: tasks ?? [],
                onAdd,
                handleChangeTask,
            }}
        >
            {children}
        </TaskFramerContext.Provider>
    );
};
