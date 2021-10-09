import React, { useMemo, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useIntl } from "react-intl";
import Button from "src/components/atoms/Button";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import { SchemasColors } from "src/styles/theme";
import TaskCard from "../TaskCard";

const colorsTheme: SchemasColors[] = [
    "primary",
    "secondary",
    "tertiary",
    "fourth",
];

const ModalTasksComplete: React.FC = () => {
    const [activeDelete, setActiveDelete] = useState(false);
    const { items } = useTaskFramer();
    const { formatMessage } = useIntl();

    const renderTasks = useMemo(
        () =>
            items?.map((task, index) =>
                task && task.isDone ? (
                    <TaskCard
                        index={index}
                        key={task.id}
                        task={{ ...task, bottom: !!(index % 2) }}
                        colorTheme={
                            colorsTheme[Math.floor(Math.random() * 4) + 1]
                        }
                        type={activeDelete ? "delete" : "unarchive"}
                    />
                ) : null,
            ),
        [activeDelete, items],
    );
    return (
        <>
            <div className="flex justify-between items-center mb-6">
                <Text fontWeight="semibold" fontSize="20px">
                    {activeDelete
                        ? formatMessage({ id: "modalTaskCompleteDelete" })
                        : formatMessage({ id: "modalTaskCompleteUnarchive" })}
                </Text>
                <Button
                    style={{ height: "min-content" }}
                    colorTheme={activeDelete ? "primary" : "secondary"}
                    onClick={() => setActiveDelete((prev) => !prev)}
                >
                    <MdDelete size={30} />
                </Button>
            </div>
            <div
                className="overflow-hidden"
                style={{ minHeight: 500, maxHeight: 500, overflowY: "auto" }}
            >
                <div className="flex flex-col gap-6">{renderTasks}</div>
            </div>
        </>
    );
};

export default ModalTasksComplete;
