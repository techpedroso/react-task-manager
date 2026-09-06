import "./Task.css";
import Icon from "../Icon/Icon.jsx";

function Task(props) {
    return (
        <ul className="base-container task-list flex flex-column gap-md">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex justify-center gap-sm">
                    <button
                        onClick={() => props.onTaskComplete(task.id)}
                        className={`surface-container task-list_item ${task.isCompleted && 'task-list_item-completed'}`}>
                        {task.title}
                    </button>

                    <button className="button button-icon">
                        <Icon name="chevron-right"></Icon>
                    </button>

                    <button
                        onClick={() => props.onTaskDelete(task.id)}
                        className="button button-icon">
                        <Icon name="trash"></Icon>
                    </button>
                </li>
            )}
        </ul>
    );
}

export default Task;