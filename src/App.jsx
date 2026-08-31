import "./App.css";

import { useState } from "react"; //importa o useState do React

import Container from "./components/Container/Container.jsx"
import Task from "./components/Task/Task.jsx"
import AddTask from "./components/AddTask/AddTask.jsx"
import Icon from "./components/Icon/Icon.jsx";

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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const themeIcon = theme === "light" ? "sun" : "moon";

  function onTaskComplete(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task;
    })

    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="app flex align-center flex-column gap-lg" data-theme={theme}>
      {/* Header */}
      <Container>
        <h1 className="title">Task Manager</h1>

        <button className="button" onClick={toggleTheme}>
          <Icon name={themeIcon} />
        </button>
      </Container>

      {/* Form */}
      <Container>

      </Container>

      {/* List */}
      <Container>
        <Task tasks={tasks} onTaskComplete={onTaskComplete} onTaskDelete={onTaskDelete}>
        </Task>
      </Container>
    </div>
  );
}

export default App;