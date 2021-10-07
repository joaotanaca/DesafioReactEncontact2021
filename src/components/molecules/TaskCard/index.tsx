import React from "react";
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
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
