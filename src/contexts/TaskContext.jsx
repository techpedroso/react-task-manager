import { createContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();

function TaskProvider({ children }) {
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
    ]);

    const [progress, setProgress] = useState();
    
    function onChangeProgress(tasks) {
        setProgress(tasks.filter((task) => (task.isCompleted === true)).length / tasks.length * 100);
    }

    function addTask(title, description) {
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

    function completeTask(taskId) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted }
            }

            return task;
        })

        setTasks(newTasks);
        onChangeProgress(newTasks);
    }

    function deleteTask(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
        onChangeProgress(newTasks);
    }

    return (
        <TaskContext.Provider value={{ tasks,  addTask, completeTask, deleteTask, progress }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskProvider };
export default TaskContext;