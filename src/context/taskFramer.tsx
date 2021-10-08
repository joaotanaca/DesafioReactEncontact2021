/* eslint-disable camelcase */
import { useAnimation, useMotionValue } from "framer-motion";
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useCallback,
    useEffect,
} from "react";
import TTask from "src/interfaces/Task";
import { getHeight } from "src/lib/taskFramer";
import todos from "src/db";
import { storageGet, storageSet } from "src/lib/localStorage";

type TOnAdd = (index: TTask) => void;
type TOnDelete = (index: number) => void;

interface TaskFramer {
    items: TTask[];
    total: number;
    controls: any;
    completeTask: number;
    onAdd: TOnAdd;
    onDelete: TOnDelete;
}

const STORAGE_KEY = "tasks";

const TaskFramerContext = createContext({} as TaskFramer);

export const useTaskFramer = () => useContext(TaskFramerContext);

export const TaskFramerProvider = ({ children }: { children?: ReactNode }) => {
    const [tasks, setTasks] = useState<TTask[]>([]);

    const controls = useAnimation();
    const y = useMotionValue(0);
    const scrollContainer = 150;

    useEffect(() => {
        const storageTasks: TTask[] = storageGet(STORAGE_KEY);
        setTasks(storageTasks.length ? storageTasks : todos);
        !storageTasks.length && storageSet(STORAGE_KEY, todos);
    }, []);

    const onAdd: TOnAdd = useCallback((task: TTask) => {
        setTasks((prev) => {
            const prevTasks = [...prev];
            prevTasks.push(task);
            storageSet(STORAGE_KEY, prevTasks);
            return prevTasks;
        });
    }, []);

    const onDelete: TOnDelete = useCallback(
        (index) => {
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
                const taskIndex = [...prev];
                taskIndex[index].isDone = true;
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
                completeTask: tasks.filter((task) => task.isDone).length,
                items: tasks,
                onAdd,
                onDelete,
                total: tasks.length,
            }}
        >
            {children}
        </TaskFramerContext.Provider>
    );
};
