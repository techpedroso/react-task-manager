import "./Task.css";

import Container from "../Container/Container.jsx";
import AddTask from "./AddTask/AddTask.jsx";
import ProgressBar from "./ProgressBar/ProgressBar.jsx";
import ListTask from "./ListTask/ListTask.jsx";

function Task(props) {
    return (
        <div className="task-container flex flex-column gap-md">
            {/* Form */}
            <Container>
                <AddTask onAddTaskSubmit={props.onAddTaskSubmit}/>
            </Container>

            {/* Progress bar */}
            <Container>
                <ProgressBar progress={props.progress}></ProgressBar>
            </Container>

            {/* List */}
            <Container>
                <ListTask tasks={props.tasks} onTaskComplete={props.onTaskComplete} onTaskDelete={props.onTaskDelete}/>
            </Container>
        </div>
    )
}

export default Task;