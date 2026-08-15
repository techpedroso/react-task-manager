import "./Container.css";

function Container({ children, variant = "default" }) {
  return (
    <div className={`container container-${variant}`}>
      {children}
    </div>
  );
}

export default Container;