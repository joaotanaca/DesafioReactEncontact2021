import React from "react";
import ReactDOM from "react-dom";
import "react-circular-progressbar/dist/styles.css";
import reportWebVitals from "./reportWebVitals";
import App from "./app";
import "./styles/index.css";
import GlobalProvider from "./components/atoms/GlobalProvider";

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
