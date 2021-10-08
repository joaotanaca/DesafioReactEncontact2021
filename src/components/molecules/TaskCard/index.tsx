import { motion, PanInfo, useAnimation } from "framer-motion";
import React, { useCallback, useState } from "react";
import { IoMdDoneAll, IoIosArrowDown } from "react-icons/io";
import Button from "src/components/atoms/Button";
import Heading from "src/components/atoms/Heading";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import TTask from "src/interfaces/Task";
import { SchemasColors } from "src/styles/theme";
import { BackgroudSection, TaskContainer } from "./styles";

type TProps = {
    task: TTask & { bottom: boolean };
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    colorTheme?: SchemasColors;
    index: number;
};

const TaskCard: React.FC<TProps> = ({ task, index, ...props }) => {
    const { onDelete, total } = useTaskFramer();
    const controls = useAnimation();
    const [open, setOpen] = useState(false);
    const handleDragEnd = useCallback(
        async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
            const offset = info.offset.x;
            const velocity = info.velocity.x;
            if (offset > 250 || velocity > 1000) {
                await controls.start({
                    x: "100%",
                    transition: { duration: 0.2 },
                });
                onDelete(index);
            } else {
                controls.start({
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2 },
                });
            }
        },
        [controls, index, onDelete],
    );

    return (
        <TaskContainer
            className="w-full relative overflow-hidden rounded-xl "
            style={{
                marginBottom: total - 1 === index ? 0 : 10,
                willChange: "transform",
                cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
            layout
            {...props}
        >
            <BackgroudSection>
                <IoMdDoneAll
                    size={30}
                    className="absolute  transform -translate-y-1/2 top-1/2 left-4"
                />
            </BackgroudSection>
            <motion.div
                className="card rounded-xl  flex flex-col items-start justify-between w-full h-full relative overflow-hidden z-1"
                drag="x"
                dragDirectionLock
                onDragEnd={handleDragEnd}
                animate={controls}
            >
                <motion.div className="w-full" layout>
                    <Heading
                        level={5}
                        className="p-4 flex justify-between items-center w-full"
                    >
                        {task.title}
                        <Button
                            className="z-50"
                            onClick={(event) => {
                                setOpen((prev) => !prev);
                            }}
                            colorTheme={props.colorTheme}
                        >
                            <IoIosArrowDown size={24} />
                        </Button>
                    </Heading>
                </motion.div>
                <motion.div
                    layout
                    animate={open ? "open" : "close"}
                    style={{ opacity: 0, height: "0" }}
                    variants={{
                        open: { opacity: 1, height: "100%" },
                        close: { opacity: 0, height: "0" },
                    }}
                >
                    <Text fontSize="16px" margin="0 1rem 1rem">
                        {task.description || ""}
                    </Text>
                </motion.div>
            </motion.div>
        </TaskContainer>
    );
};
export default TaskCard;
