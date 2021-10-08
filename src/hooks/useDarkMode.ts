import { useCallback, useEffect, useState } from "react";
import { storageGet, storageSet } from "src/lib/localStorage";

function useDarkMode(): { toogleMode: () => void; mode: string } {
    const [dark, setDark] = useState<boolean>(storageGet("theme") === "dark");

    useEffect(() => {
        const html = document.querySelector("html") as HTMLHtmlElement;
        const theme = dark ? "dark" : "light";
        html.dataset.theme = theme;
        storageSet("theme", theme);
    }, [dark]);

    const toogleMode = useCallback(() => {
        setDark((prev) => !prev);
    }, [setDark]);
    return { toogleMode, mode: dark ? "dark" : "light" };
}

export default useDarkMode;
