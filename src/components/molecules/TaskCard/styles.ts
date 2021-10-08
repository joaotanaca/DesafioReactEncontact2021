import { motion } from "framer-motion";
import { TTypeFunctionTask } from "src/context/taskFramer";
import { SchemasColors } from "src/styles/theme";
import styled from "styled-components";

export const BackgroudSection = styled.div.attrs({
    className:
        "absolute top-0 left-0 w-full h-full rounded-2xl transition-none",
})<{ type: TTypeFunctionTask }>`
    background: ${({ theme, type }) => theme[type].accentColor};
    color: ${({ theme, type }) => theme[type].fontColor};
    z-index: -1;
`;

export const TaskContainer = styled(motion.div)<{
    colorTheme?: SchemasColors;
}>`
    .card {
        background-color: ${({ theme, colorTheme = "primary" }) =>
            theme[colorTheme].accentColor};
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
    button {
        box-shadow: none;
    }
`;
