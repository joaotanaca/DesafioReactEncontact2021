import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTaskFramer } from "src/context/taskFramer";
import { SchemasColors } from "src/styles/theme";
import Text from "src/components/atoms/Text";
import TaskCard from "src/components/molecules/TaskCard";
import Input from "src/components/atoms/Input";

const colorsTheme: SchemasColors[] = [
    "primary",
    "secondary",
    "tertiary",
    "fourth",
];

const TasksCards = () => {
    const {
        items,
        controls,
        completeTask,
        handleSearch,
        itemsFiltered,
        search,
    } = useTaskFramer();

    const renderTasks = useMemo(
        () =>
            itemsFiltered?.map((task, index) =>
                task && !task?.isDone ? (
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
        [itemsFiltered],
    );
    return (
        <div
            className="w-full"
            style={{
                borderRadius: 30,
                backgroundColor: "transparent",
                position: "relative",
                transform: "translateZ(0)",
            }}
        >
            <div className="mb-10 col-span-full">
                <Text fontWeight="semibold">
                    Você tem {items.length - completeTask} tarefas não
                    finalizadas
                </Text>
                <Input
                    style={{ padding: "0.5rem", margin: "15px 0 0" }}
                    defaultValue={search}
                    title=""
                    id="search"
                    placeholder="Pesquisa"
                    onChange={(event) =>
                        handleSearch(event.currentTarget.value)
                    }
                />
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
