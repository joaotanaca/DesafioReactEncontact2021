import React, { useMemo } from "react";
import Text from "src/components/atoms/Text";
import TaskCard from "src/components/molecules/TaskCard";
import TTask from "src/interfaces/Task";

type TColorsTheme = ("primary" | "secondary" | "tertiary")[];

type TProps = {
    tasks: TTask[];
};

const colorsTheme: TColorsTheme = ["primary", "secondary", "tertiary"];

const TasksCards: React.FC<TProps> = ({ tasks }) => {
    const renderTasks = useMemo(
        () =>
            tasks.map((task, index) => (
                <TaskCard
                    key={task.id}
                    task={{ ...task, bottom: !!(index % 2) }}
                    colorTheme={colorsTheme[Math.floor(Math.random() * 3) + 1]}
                />
            )),
        [tasks],
    );
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="px-4">
                <Text fontWeight="semibold">
                    Você tem 5 tarefas não finalizadas
                </Text>
            </div>
            {renderTasks}
        </div>
    );
};

export default TasksCards;
