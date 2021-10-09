import { LazyMotion } from "framer-motion";
import React from "react";
import { LocaleProvider } from "src/context/locale";
import { TaskFramerProvider } from "src/context/taskFramer";
import GlobalStyle from "src/styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const loadFeatures = () => import("framer-motion").then((res) => res.domMax);

const GlobalProvider: React.FC = ({ children }) => {
    return (
        <LocaleProvider>
            <LazyMotion features={loadFeatures}>
                <ThemeProvider theme={theme}>
                    <TaskFramerProvider>
                        <GlobalStyle />
                        {children}
                    </TaskFramerProvider>
                </ThemeProvider>
            </LazyMotion>
        </LocaleProvider>
    );
};

export default GlobalProvider;
