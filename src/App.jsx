import { useState } from "react"; //importa o useState do React

import Task from "./components/Task/Task.jsx"
import AddTask from "./components/AddTask/AddTask.jsx"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação a noite",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar matemática",
      description: "Estudar matemática a noite",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar fisíca",
      description: "Estudar fisíca a noite",
      isCompleted: false
    },
  ])
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="app flex align-center flex-column gap-lg" data-theme={theme}>
      {/* Header */}
      <div className="flex gap-lg" variant="medium">
        <h1 className="title">Task Manager</h1>

        <button className="themeBtn" onClick={toggleTheme}>
          Theme
        </button>
      </div>

      {/* Form */}
      <div variant="medium">
    
      </div>

      {/* List */}
      <div className="" variant="medium">
        <Task tasks={tasks}>
        </Task>
      </div>
    </div>
  );
}

export default App;