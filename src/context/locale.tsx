/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable camelcase */
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
    useCallback,
} from "react";
import { LOCALES, messages } from "src/config/intl";
import { IntlProvider } from "react-intl";

type TMessages = keyof typeof messages;

interface ILocale {
    locale: TMessages;
    setLocale: (locales: keyof typeof LOCALES) => void;
}

const LocaleContext = createContext({} as ILocale);

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }: { children?: ReactNode }) => {
    const [locale, setLocale] = useState<TMessages>("pt-BR");
    const handleLocale = useCallback(
        (locales: keyof typeof LOCALES) =>
            setLocale(LOCALES[locales] as TMessages),
        [],
    );

    useEffect(() => {
        setLocale((navigator.language as TMessages) || "pt-BR");
    }, []);

    return (
        <LocaleContext.Provider
            value={{
                locale,
                setLocale: handleLocale,
            }}
        >
            <IntlProvider
                messages={messages[locale] as any}
                locale={locale}
                defaultLocale={locale}
            >
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
};
