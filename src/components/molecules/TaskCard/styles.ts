import { motion } from "framer-motion";
import { SchemasColors } from "src/styles/theme";
import styled from "styled-components";

export const BackgroudSection = styled(motion.div).attrs({
    className: "absolute top-0 left-0 w-full h-full rounded-2xl",
})`
    background: ${({ theme }) => theme.success.accentColor};
    color: ${({ theme }) => theme.success.fontColor};
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: -1;
`;

export const TaskContainer = styled(motion.div)<{
    colorTheme?: SchemasColors;
}>`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    height: min-content;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
    .card {
        background-color: ${({ theme, colorTheme = "primary" }) =>
            theme[colorTheme].accentColor};
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
