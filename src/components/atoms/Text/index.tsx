import styled from "styled-components";

type TProps = {
    fontSize?: string;
    fontColor?: string;
    fontWeight?: keyof typeof weight;
    lineHeight?: string;
    margin?: string;
    padding?: string;
};

const weight = {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};

const Text = styled.p.attrs({ className: "text-base" })<TProps>`
    color: ${({ fontColor, theme }) =>
        fontColor ? fontColor : theme.fontColor};

    ${({ fontSize }) => fontSize && `font-size:${fontSize};`}

    ${({ lineHeight }) => lineHeight && `line-height:${lineHeight};`}
    
    ${({ fontWeight }) => fontWeight && `font-weight:${weight[fontWeight]};`}

    ${({ margin }) => margin && `margin:${margin};`}
    
    ${({ padding }) => padding && `padding:${padding};`};
`;

export default Text;
