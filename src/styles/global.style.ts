import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior:smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }
    body{
        background-color: ${({ theme }) => theme.background};
        font-family: 'Montserrat', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        color: ${({ theme }) => theme.fontColor};
        &.primary{
            color: ${({ theme }) => theme.primary.fontColor};
        }
        &.secondary{
            color: ${({ theme }) => theme.secondary.fontColor};
        }
        &.tertiary{
            color: ${({ theme }) => theme.tertiary.fontColor};
        }
    }
`;
