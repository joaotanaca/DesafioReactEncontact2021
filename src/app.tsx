import React from "react";
import { useTheme } from "styled-components";
import Template from "./components/template";

export default function App() {
    const { primary } = useTheme();
    return (
        <Template>
            <section>
                <h1>Todos</h1>
                <p>{primary.accentColor}</p>
            </section>
        </Template>
    );
}
