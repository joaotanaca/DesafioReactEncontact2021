import { LazyMotion } from "framer-motion";
import React from "react";
import { TaskFramerProvider } from "src/context/taskFramer";
import GlobalStyle from "src/styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const loadFeatures = () => import("framer-motion").then((res) => res.domMax);

const GlobalProvider: React.FC = ({ children }) => (
    <LazyMotion features={loadFeatures}>
        <ThemeProvider theme={theme}>
            <TaskFramerProvider>
                <GlobalStyle />
                {children}
            </TaskFramerProvider>
        </ThemeProvider>
    </LazyMotion>
);

export default GlobalProvider;
