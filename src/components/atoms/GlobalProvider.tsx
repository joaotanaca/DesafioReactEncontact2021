import { LazyMotion } from "framer-motion";
import React from "react";
import { TaskFramerProvider } from "@context/taskFramer";
import GlobalStyle from "@styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

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
