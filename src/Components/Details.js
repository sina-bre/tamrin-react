import { useState } from "react";
const Details = (props) => {
  //ss
  const deleteDetails = (i) => {
    props.setData(props.data.filter((item, index) => index !== i));
    console.log(props.data);
  };
  return (
    <div>
      {props.data.map((item, index) => (
        <div key={index}>
          <h3>
            {" "}
            {item.name} is {item.age} years old
          </h3>
          <button
            onClick={() => {
              deleteDetails(index);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default Details;
