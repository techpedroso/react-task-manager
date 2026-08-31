import "./Icon.css";

function Icon({ name, ...props }) {
    return (
        <svg className="icon" {...props}>
            <use href={`/icons.svg#icon_${name}`} />
        </svg>
    );
}

export default Icon;