import "./Button.css";
function Button({ text = "defult", ...props }) {
  return (
    <>
      <button
        {...props}
        // onClick={props.onClick}
        // style={props.style}
        // className={props.className}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
