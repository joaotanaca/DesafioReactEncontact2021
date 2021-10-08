import React, { useMemo, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { FaTasks } from "react-icons/fa";
import Modal from "src/components/atoms/Modal";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import styled, { useTheme } from "styled-components";
import ModalTasksComplete from "../ModalTasksComplete";

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
    const [open, setOpen] = useState(false);
    const { secondary } = useTheme();
    const { completeTask, items } = useTaskFramer();
    const percentage = useMemo(
        () => completeTask / (items.length * 0.01),
        [completeTask, items.length],
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
            <div className="text-center sm:text-left col-span-2">
                <Text fontWeight="medium" fontSize="18px">
                    <span
                        style={{ color: secondary.accentColor }}
                        className="font-semibold"
                    >
                        {completeTask}/{items.length}{" "}
                    </span>
                    tarefas prontas
                </Text>
            </div>
            <div className="col-start-4 flex justify-end items-start h-full pt-2 pr-2">
                <FaTasks
                    onClick={() => setOpen(true)}
                    size={20}
                    className="cursor-pointer"
                    title="Tarefas feitas"
                />
                <Modal open={open} setOpen={setOpen}>
                    <ModalTasksComplete />
                </Modal>
            </div>
        </ContainerProgressTask>
    );
};

export default ProgressTask;
