import React from "react";
import ReactDOM from "react-dom";
import "react-circular-progressbar/dist/styles.css";
import App from "app";
import reportWebVitals from "reportWebVitals";
import GlobalProvider from "@atoms/GlobalProvider";
import "@styles/index.css";

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <App />
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals();
