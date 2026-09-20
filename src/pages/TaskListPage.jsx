import Task from "../components/Task/Task.jsx";

function TaskListPage(props) {
    return <Task tasks={props.tasks} progress={props.progress} onTaskComplete={props.onTaskComplete} onTaskDelete={props.onTaskDelete} onAddTaskSubmit={props.onAddTaskSubmit}/>;
}

export default TaskListPage;