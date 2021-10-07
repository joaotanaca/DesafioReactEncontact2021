import React from "react";
import { CgShapeHalfCircle } from "react-icons/cg";
import Heading from "src/components/atoms/Heading";
import SemiCircle from "src/components/atoms/SemiCircle";
import Text from "src/components/atoms/Text";
import TTask from "src/interfaces/Task";
import styled from "styled-components";

type TProps = {
    task: TTask & { bottom: boolean };
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    colorTheme?: "primary" | "secondary" | "tertiary";
};

const TaskContainer = styled.div<{
    colorTheme?: "primary" | "secondary" | "tertiary";
}>`
    background-color: ${({ theme, colorTheme = "primary" }) =>
        theme[colorTheme].accentColor};
    min-height: 100px;
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
`;

const TaskCard: React.FC<TProps> = ({ task, ...props }) => {
    return (
        <TaskContainer
            className="rounded-3xl px-4 py-3 flex flex-col items-start gap-3 justify-between w-full relative overflow-hidden"
            {...props}
        >
            <Heading level={5}>{task.title}</Heading>
            <Text fontSize="16px">{task.id}</Text>

            <SemiCircle bottom={task.bottom} />
        </TaskContainer>
    );
};

export default TaskCard;
