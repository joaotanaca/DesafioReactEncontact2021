import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior:smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        transition: color 300ms, background-color 300ms;
        width: 100%;
        &[data-theme="dark"] {
            background: #000;
            filter: invert(1) hue-rotate(180deg);
            img {
                filter: invert(1) hue-rotate(180deg);
            }
        }
    }

    body{
        background-color: ${({ theme }) => theme.background};
        font-family: 'Open Sans', sans-serif;
        min-height:100vh;
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
