import "./Container.css";

function Container({ children, variant }) {
  return (
    <div className={`container`}>
      {children}
    </div>
  );
}

export default Container;