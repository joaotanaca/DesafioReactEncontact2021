import GlobalProvider from "./components/atoms/GlobalProvider";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
