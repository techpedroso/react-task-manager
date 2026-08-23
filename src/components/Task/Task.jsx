function Task({tasks, children}) {
    return (
        tasks.map((task) => (
            <p>{task.title}</p>
        ))
    );
}

export default Task;