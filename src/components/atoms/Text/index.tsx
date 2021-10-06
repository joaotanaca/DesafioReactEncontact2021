import styled from "styled-components";

type TProps = {
    fontSize?: string;
    fontColor?: string;
    fontWeight?: number;
    lineHeight?: string;
    margin?: string;
    padding?: string;
};

const Text = styled.p.attrs({ className: "text-base" })<TProps>`
    color: ${({ fontColor, theme }) =>
        fontColor ? fontColor : theme.fontColor};

    ${({ fontSize }) => fontSize && `font-size:${fontSize};`}

    ${({ lineHeight }) => lineHeight && `line-height:${lineHeight};`}
    
    ${({ fontWeight }) => fontWeight && `font-weight:${fontWeight};`}

    ${({ margin }) => margin && `margin:${margin};`}
    
    ${({ padding }) => padding && `padding:${padding};`};
`;

export default Text;
