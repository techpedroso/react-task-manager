import { useState } from "react";
import "./AddTask.css";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="base-container form-container flex flex-column gap-lg">
            <input
                id="task-title"
                name="task-title"
                className="surface-container form-input"
                type="text"
                placeholder="Task title..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <input
                id="task-description"
                name="task-description"
                className="surface-container form-input"
                type="text"
                placeholder="Task description..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button onClick={() => {
                props.onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }} className="button button-icon">
                Add task
            </button>
        </div>
    );
}

export default AddTask;