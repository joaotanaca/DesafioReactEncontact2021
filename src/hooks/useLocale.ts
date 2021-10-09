import { useEffect, useState } from "react";
import { LOCALES, messages } from "src/config/intl";

type TMessages = keyof typeof messages;

function useLocale(): {
    locale: TMessages;
    setLocale: (language: keyof typeof LOCALES) => void;
} {
    const [locale, setLocale] = useState<TMessages>("pt-BR");
    useEffect(() => {
        setLocale((navigator.language as TMessages) || "pt-BR");
    }, []);
    return {
        locale,
        setLocale: (language: keyof typeof LOCALES) =>
            setLocale(LOCALES[language] as TMessages),
    };
}

export default useLocale;
