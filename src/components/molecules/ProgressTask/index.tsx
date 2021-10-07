import React, { useMemo } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaTasks } from "react-icons/fa";
import Heading from "src/components/atoms/Heading";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import styled, { useTheme } from "styled-components";

const ContainerProgressTask = styled.div.attrs({
    className:
        "grid grid-cols-4 sm:gap-0 lg:gap-4 items-center mt-8 sm:mt-0 rounded-3xl p-2 col-span-4 sm:col-span-2 order-3 sm:order-2",
})`
    border: 2px solid ${(props) => props.theme.border};
    text {
        transform: translateY(1px);
        font-weight: 600;
    }
`;

const ProgressTask: React.FC = () => {
    const { secondary } = useTheme();
    const { completeTask, total } = useTaskFramer();
    const percentage = useMemo(
        () => completeTask / (total * 0.01),
        [completeTask, total],
    );

    return (
        <ContainerProgressTask>
            <div className="col-span-1" style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${Math.round(percentage)}%`}
                    counterClockwise
                    styles={buildStyles({
                        pathColor: secondary.accentColor,
                        textColor: secondary.accentColor,
                        textSize: "1.5rem",
                    })}
                />
            </div>
            <div className="text-left col-span-2">
                <Text fontWeight="medium" fontSize="18px">
                    <span
                        style={{ color: secondary.accentColor }}
                        className="font-semibold"
                    >
                        {completeTask}/{total}{" "}
                    </span>
                    tarefas prontas
                </Text>
            </div>
            <div className="col-start-4 flex justify-end items-start h-full pt-2 pr-2">
                <FaTasks
                    size={20}
                    className="cursor-pointer"
                    title="Tarefas feitas"
                />
            </div>
        </ContainerProgressTask>
    );
};

export default ProgressTask;
