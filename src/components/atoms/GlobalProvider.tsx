import React from "react";
import { TaskFramerProvider } from "src/context/taskFramer";
import GlobalStyle from "src/styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const GlobalProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <TaskFramerProvider>
            <GlobalStyle />
            {children}
        </TaskFramerProvider>
    </ThemeProvider>
);

export default GlobalProvider;
