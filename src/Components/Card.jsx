import { useState } from "react";
import Button from "./Button";
import "./Button.css";
const Card = (props) => {
  const counter = function () {};
  const [clickA, setClickA] = useState("A");
  const [clickB, setClickB] = useState("B");

  const [value, setValue] = useState(0);
  let isEven = value % 2 == 0;
  function plus() {
    setValue(value + 1);
  }
  const firstClick = function () {
    alert("first click is done");
    setClickA("B");
  };
  const secondClick = function () {
    alert("second click is done");
    setClickA("A");
  };
  return (
    <div>
      <h1>
        Hello World {props.name} {props.lastname}
        <Button
          // className="btn"
          onClick={plus}
          text={clickA}
          style={isEven ? { backgroundColor: "red" } : {}}
        />
        <Button
          onClick={isEven ? firstClick : {}}
          // text={isEven ? { firstClick } : { secondClick }}
        />
        <p>{value}</p>
      </h1>
    </div>
  );
};

export default Card;
