import { useState } from "react"; //importa o useState do React

import "./App.css";

import Container from "./components/Container/Container.jsx";
import Task from "./components/Task/Task.jsx"
import AddTask from "./components/AddTask/AddTask.jsx"

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="app" data-theme={theme}>
      {/* Header */}
      <Container variant="medium">
        <h1>Task Manager</h1>

        <button onClick={toggleTheme}>
          Alterar tema
        </button>
      </Container>

      {/* Form */}
      <Container variant="medium">

      </Container>

      {/* List */}
      <Container variant="medium">
        
      </Container>
    </div>
  );
}

export default App;