import "./App.css";

import { useState } from "react";

import AppRouter from "./AppRouter.jsx";
import Container from "./components/Container/Container.jsx"
import Icon from "./components/Icon/Icon.jsx";


function App() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const themeIcon = theme === "light" ? "sun" : "moon";

  return (
    <div className="app flex align-center flex-column gap-lg" data-theme={theme}>
      {/* Header */}
      <Container>
        <h1 className="title">Task Manager</h1>

        <button className="button" onClick={toggleTheme}>
          <Icon name={themeIcon} />
        </button>
      </Container>

      <AppRouter/>
    </div>
  );
}

export default App;