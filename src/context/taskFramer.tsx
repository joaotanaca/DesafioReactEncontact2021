/* eslint-disable camelcase */
import { useAnimation, useMotionValue } from "framer-motion";
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useCallback,
} from "react";
import TTask from "src/interfaces/Task";
import { getHeight } from "src/lib/taskFramer";

type TOnDelete = (index: number) => void;

interface TaskFramer {
    items: TTask[];
    total: number;
    controls: any;
    completeTask: number;
    onDelete: TOnDelete;
}

const TaskFramerContext = createContext({} as TaskFramer);

export const useTaskFramer = () => useContext(TaskFramerContext);

export const TaskFramerProvider = ({ children }: { children?: ReactNode }) => {
    const [tasks, setTasks] = useState<TTask[]>([
        { id: "flrGI", title: "Lavar os pratos", isDone: false },
        { id: "Tw-I9", title: "Cortar a grama", isDone: false },
        { id: "7f2sf", title: "Comprar pão", isDone: false },
    ]);
    const controls = useAnimation();
    const y = useMotionValue(0);
    const scrollContainer = 150;

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
                onDelete,
                total: tasks.length,
            }}
        >
            {children}
        </TaskFramerContext.Provider>
    );
};
