import { LazyMotion } from "framer-motion";
import React from "react";
import { IntlProvider } from "react-intl";
import { messages } from "src/config/intl";
import { TaskFramerProvider } from "src/context/taskFramer";
import useLocale from "src/hooks/useLocale";
import GlobalStyle from "src/styles/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

const loadFeatures = () => import("framer-motion").then((res) => res.domMax);

const GlobalProvider: React.FC = ({ children }) => {
    const { locale } = useLocale();
    return (
        <IntlProvider
            messages={messages[locale] as any}
            locale={locale}
            defaultLocale={locale}
        >
            <LazyMotion features={loadFeatures}>
                <ThemeProvider theme={theme}>
                    <TaskFramerProvider>
                        <GlobalStyle />
                        {children}
                    </TaskFramerProvider>
                </ThemeProvider>
            </LazyMotion>
        </IntlProvider>
    );
};

export default GlobalProvider;
