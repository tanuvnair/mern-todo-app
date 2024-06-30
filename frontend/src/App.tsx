import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import TodoContainer from './components/TodoContainer/TodoContainer';
import './App.css'

function App() {
  return(
    <div className="app">
      <ThemeSwitcher></ThemeSwitcher>

      <div className="container">
        <TodoContainer></TodoContainer>
      </div>
    </div>
  )
}

export default App;