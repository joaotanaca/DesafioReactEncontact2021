import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior:smooth;
    }
    body{
        background-color: ${({ theme }) => theme.background};
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
