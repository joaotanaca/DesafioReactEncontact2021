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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    svg {
        path {
            stroke: ${({ theme, colorTheme = "primary" }) =>
                theme[colorTheme].fontColor};
        }
    }
`;

const Button: React.FC<TProps> = ({ children, className, ...props }) => (
    <ButtonStyled {...props} className={`p-2 rounded-2xl ${className}`}>
        {children}
    </ButtonStyled>
);
export default Button;
