import "./Task.css";
import Icon from "../Icon/Icon.jsx";

function Task(props) {
    return (
        <ul className="task-list">
            {props.tasks.map((task) =>
                <li key={task.id} className="flex justify-center gap-sm">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
                        className={`task-list_item ${task.isCompleted && 'task-list_item-completed'}`}>
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