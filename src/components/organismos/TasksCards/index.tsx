import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTaskFramer } from "src/context/taskFramer";
import { SchemasColors } from "src/styles/theme";
import Text from "src/components/atoms/Text";
import TaskCard from "src/components/molecules/TaskCard";

const colorsTheme: SchemasColors[] = [
    "primary",
    "secondary",
    "tertiary",
    "fourth",
];

const TasksCards = () => {
    const { items, controls, completeTask, total } = useTaskFramer();

    const renderTasks = useMemo(
        () =>
            items.map((task, index) =>
                !task.isDone ? (
                    <TaskCard
                        index={index}
                        key={task.id}
                        task={{ ...task, bottom: !!(index % 2) }}
                        colorTheme={
                            colorsTheme[Math.floor(Math.random() * 4) + 1]
                        }
                    />
                ) : null,
            ),
        [items],
    );
    return (
        <div
            className="w-full"
            style={{
                borderRadius: 30,
                backgroundColor: "transparent",
                overflow: "hidden",
                position: "relative",
                transform: "translateZ(0)",
            }}
        >
            <div className="px-4 col-span-full">
                <Text fontWeight="semibold">
                    Você tem {total - completeTask} tarefas não finalizadas
                </Text>
            </div>
            <motion.div
                className="flex flex-col sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-4"
                animate={controls}
            >
                {renderTasks}
            </motion.div>
        </div>
    );
};

export default TasksCards;
