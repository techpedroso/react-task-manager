import "./App.css";

import { v4 } from "uuid";
import { useState } from "react";

import AppRouter from "./AppRouter.jsx";
import Container from "./components/Container/Container.jsx"
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

  const [progress, setProgress] = useState();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const themeIcon = theme === "light" ? "sun" : "moon";

  function onChangeProgress(tasks) {
    setProgress(tasks.filter((task) => (task.isCompleted === true)).length / tasks.length * 100);
  }

  function onAddTaskSubmit(title, description) {
    if (!title.trim() || !description.trim())
      return;

    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    onChangeProgress(newTasks);
  }

  function onTaskComplete(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task;
    })

    setTasks(newTasks);
    onChangeProgress(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
    onChangeProgress(newTasks);
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

      <AppRouter
        tasks={tasks}
        progress={progress}
        onTaskComplete={onTaskComplete}
        onTaskDelete={onTaskDelete}
        onAddTaskSubmit={onAddTaskSubmit}
      />
    </div>
  );
}

export default App;