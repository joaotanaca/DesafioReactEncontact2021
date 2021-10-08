import { motion } from "framer-motion";
import React from "react";
import useMobile from "src/hooks/useMobile";
import { mixins } from "src/styles/mixins";
import styled from "styled-components";

type TProps = { open: boolean };

const ContainerModal = styled(motion.div).attrs({
    className: "fixed top-0 left-0 w-full h-full z-50",
})`
    background-color: rgba(255, 255, 255, 0.8);
    .modal {
        position: absolute;
        width: 100%;
        background-color: white;
        border-top: 2px solid ${({ theme }) => theme.fontColor};

        ${({ theme }) => mixins.sm`
            width: 400px;
            border: 2px solid ${theme.fontColor};
        `}
    }
`;

const Modal: React.FC<TProps> = ({ open, children }) => {
    const mobile = useMobile();
    return open ? (
        <ContainerModal>
            <motion.div
                initial={{ top: mobile ? "100%" : "60%" }}
                animate={{ top: mobile ? "45%" : "50%" }}
                transition={{ ease: "easeOut" }}
                className="modal sm:rounded-xl transform  sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 pt-0 sm:pt-4 p-4"
            >
                {children}
            </motion.div>
        </ContainerModal>
    ) : null;
};

export default Modal;
