import "./Task.css";

function Task({ tasks, children }) {
    return (
        <ul className="task-list">
            {tasks.map((task) => 
                <li className="task-list_item">{task.title}</li>
            )}
        </ul>
    );
}

export default Task;