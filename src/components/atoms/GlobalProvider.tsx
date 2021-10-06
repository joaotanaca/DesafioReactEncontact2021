import React from "react";
import GlobalStyle from "src/styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const GlobalProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default GlobalProvider;
