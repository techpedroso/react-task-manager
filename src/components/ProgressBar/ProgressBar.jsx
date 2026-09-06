import "./ProgressBar.css";

function ProgressBar(props) {
    const progress = props.progress ? props.progress.toFixed(0) : 0;

    return (
        <div className="progress_container base-container flex align-center gap-md">
            <div className="progress_percentage">{progress + "%"}</div>
            <div className="progress_bar">
                <div className="progress_status" style={{ width: `${props.progress}%` }}></div>
            </div>
        </div>
    );
}

export default ProgressBar;