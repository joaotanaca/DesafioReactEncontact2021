import { motion, PanInfo, useAnimation } from "framer-motion";
import React, { useCallback } from "react";
import { IoMdDoneAll } from "react-icons/io";
import Heading from "src/components/atoms/Heading";
import SemiCircle from "src/components/atoms/SemiCircle";
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
    const controls = useAnimation();
    const { onDelete, total } = useTaskFramer();

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
                    transition: { duration: 0.8 },
                });
            }
        },
        [controls, index, onDelete],
    );

    return (
        <TaskContainer
            className="w-full relative overflow-hidden rounded-3xl"
            style={{
                marginBottom: total - 1 === index ? 0 : 10,
                willChange: "transform",
                cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
            layout
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            {...props}
        >
            <BackgroudSection>
                <IoMdDoneAll
                    size={30}
                    className="absolute  transform -translate-y-1/2 top-1/2 left-4"
                />
            </BackgroudSection>
            <motion.div
                className="card rounded-3xl flex flex-col items-start gap-3 justify-between w-full h-full relative overflow-hidden z-1"
                drag="x"
                dragDirectionLock
                onDragEnd={handleDragEnd}
                animate={controls}
            >
                <Heading level={5} className="mt-4 mx-4">
                    {task.title}
                </Heading>
                <Text fontSize="16px" margin="0 1rem 1rem">
                    {task.id}
                </Text>
                <SemiCircle bottom={task.bottom} />
            </motion.div>
        </TaskContainer>
    );
};
export default TaskCard;
