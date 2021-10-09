import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import Modal from "src/components/atoms/Modal";
import Text from "src/components/atoms/Text";
import { useTaskFramer } from "src/context/taskFramer";
import styled, { useTheme } from "styled-components";
import ModalTasksComplete from "../ModalTasksComplete";

const ContainerProgressTask = styled.div.attrs({
    className:
        "grid grid-cols-4 sm:gap-0 lg:gap-4 items-center mt-8 sm:mt-0 rounded-xl p-4 col-span-4 sm:col-span-2 order-3 sm:order-2",
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

    return (
        <ContainerProgressTask>
            <div className="text-center sm:text-left col-span-2">
                <Text fontWeight="medium" fontSize="18px">
                    <span
                        style={{ color: secondary.accentColor }}
                        className="font-semibold"
                    >
                        {completeTask}/{items.length}{" "}
                    </span>
                    <FormattedMessage id="progressTask" />
                </Text>
            </div>
            <div className="col-start-4 flex justify-end items-start h-full">
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
