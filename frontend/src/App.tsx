import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import Todos from "./components/Todos/Todos";
import "./App.css";

function App() {
    return (
        <div className="app">
            <ThemeSwitcher></ThemeSwitcher>

            <Todos></Todos>
        </div>
    );
}

export default App;
