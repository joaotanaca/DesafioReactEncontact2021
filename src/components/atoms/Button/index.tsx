import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type TProps = HTMLAttributes<HTMLButtonElement> & {
    colorTheme?: "primary" | "secondary" | "tertiary";
};

const ButtonStyled = styled.button<TProps>`
    background-color: ${({ theme, colorTheme = "primary" }) =>
        theme[colorTheme].accentColor};
    color: ${({ theme, colorTheme = "primary" }) =>
        theme[colorTheme].fontColor};
    svg {
        path {
            fill: ${({ theme, colorTheme = "primary" }) =>
                theme[colorTheme].fontColor};
        }
    }
`;

const Button: React.FC<TProps> = ({ children, className, ...props }) => (
    <ButtonStyled {...props} className={`p-2 rounded-lg ${className}`}>
        {children}
    </ButtonStyled>
);
export default Button;
