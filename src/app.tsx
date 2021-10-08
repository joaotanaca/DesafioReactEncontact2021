import Header from "./components/organismos/Header";
import TasksCards from "./components/organismos/TasksCards";
import Template from "./components/template";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
    return (
        <Template>
            <Header />
            <Router>
                <Switch>
                    <Route path="/" component={TasksCards} />
                </Switch>
            </Router>
        </Template>
    );
}
