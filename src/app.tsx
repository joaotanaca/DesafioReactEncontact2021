import Header from "./components/organismos/Header";
import TasksCards from "./components/organismos/TasksCards";
import Template from "./components/template";

export default function App() {
    return (
        <Template>
            <Header />
            <TasksCards
                tasks={[
                    {
                        id: "flrGI",
                        title: "Lavar os pratos",
                        isDone: false,
                    },
                    {
                        id: "flrGI",
                        title: "Lavar os pratos",
                        isDone: false,
                    },
                    {
                        id: "flrGI",
                        title: "Lavar os pratos",
                        isDone: false,
                    },
                ]}
            />
        </Template>
    );
}
