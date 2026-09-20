import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import TaskContext from "./contexts/TaskContext.jsx";

import TaskListPage from "./pages/TaskListPage.jsx";
import TaskDescriptionPage from "./pages/TaskDescriptionPage.jsx";

function AppRouter(props) {
    const {
        tasks,
        progress,
        addTask,
        completeTask,
        deleteTask
    } = useContext(TaskContext);

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <TaskListPage
                    tasks={tasks}
                    onAddTaskSubmit={addTask}
                    onTaskComplete={completeTask}
                    onTaskDelete={deleteTask}
                    progress={progress}
                />
            )
        },
        {
            path: "/task-description",
            element: <TaskDescriptionPage />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default AppRouter;