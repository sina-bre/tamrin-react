import { useState } from "react";
const Details = (props) => {
  const [newName, setNewName] = useState("");
  console.log(props.data);
  const setNewNameHandler = (event) => {
    setNewName(event.target.value);
    props.updateName(newName);
  };
  return (
    <div>
      {props.data &&
        props.data.map((item) => (
          <div>
            <h3>
              <input
                type="text"
                value={item.name}
                onChange={setNewNameHandler}
              />
              is
              <input type="number" value={item.age} />
              years old
            </h3>
          </div>
        ))}
    </div>
  );
};
export default Details;
