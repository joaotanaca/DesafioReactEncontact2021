import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

type TProps = { open: boolean };

const ContainerModal = styled(motion.div).attrs({
    className: "fixed top-0 left-0 w-full h-full z-50",
})`
    background-color: rgba(255, 255, 255, 0.8);
    .modal {
        position: absolute;
        width: 400px;
        background-color: white;
        border: 2px solid ${({ theme }) => theme.fontColor};
    }
`;

const Modal: React.FC<TProps> = ({ open, children }) => {
    return open ? (
        <ContainerModal transition={{ type: "spring" }}>
            <motion.div className="modal rounded-xl transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                {children}
            </motion.div>
        </ContainerModal>
    ) : null;
};

export default Modal;
