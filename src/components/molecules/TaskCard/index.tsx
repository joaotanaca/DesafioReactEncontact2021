import { motion, PanInfo, useAnimation } from "framer-motion";
import React, { useCallback } from "react";
import Heading from "src/components/atoms/Heading";
import SemiCircle from "src/components/atoms/SemiCircle";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import TTask from "src/interfaces/Task";
import { SchemasColors } from "src/styles/theme";
import styled from "styled-components";

type TProps = {
    task: TTask & { bottom: boolean };
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    colorTheme?: SchemasColors;
    index: number;
};

const TaskContainer = styled(motion.div)<{
    colorTheme?: SchemasColors;
}>`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    min-height: 120px;
    max-height: 120px;
    .card {
        background-color: ${({ theme, colorTheme = "primary" }) =>
            theme[colorTheme].accentColor};
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        min-height: 120px;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
            color: ${({ theme, colorTheme = "primary" }) =>
                theme[colorTheme].fontColor}!important;
        }
        svg {
            circle {
                stroke: ${({ theme, colorTheme = "primary" }) =>
                    theme[colorTheme].fontColor};
            }
        }
    }
`;

const TaskCard: React.FC<TProps> = ({ task, index, ...props }) => {
    const controls = useAnimation();
    const { onDelete, total } = useTaskFramer();

    const handleDragEnd = useCallback(
        async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
            const offset = info.offset.x;

            if (offset > 200) {
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
            className="w-full overflow-hidden rounded-3xl"
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
            <motion.div
                className="card rounded-3xl flex flex-col items-start gap-3 justify-between w-full h-full relative overflow-hidden"
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
