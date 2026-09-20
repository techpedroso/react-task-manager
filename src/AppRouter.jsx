import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TaskListPage from "./pages/TaskListPage.jsx";
import TaskDescriptionPage from "./pages/TaskDescriptionPage.jsx";

function AppRouter(props) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <TaskListPage
                    tasks={props.tasks}
                    progress={props.progress}
                    onTaskComplete={props.onTaskComplete}
                    onTaskDelete={props.onTaskDelete}
                    onAddTaskSubmit={props.onAddTaskSubmit}
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