// import logo from "./logo.svg";
// import Card from "./Components/Card";
import React, { useEffect, useState } from "react";
import Card1 from "./Components/Card1";
function App() {
  // const [state2, setStat2] = "name";
  // const arr = ["this ", "is ", "an ", " array"];
  // const arr2 = ["this ", "is ", "an ", " array2"];
  // const Persons = [
  //   { id: 1, name: "test1" },
  //   { id: 2, name: "test2" },
  //   { id: 3, name: "test3" },
  //   { id: 4, name: "test4" },
  //   { id: 5, name: "test5" },
  //   { id: 6, name: "test6" },
  // ];
  // const [state, setState] = useState(arr);
  // const changeArr = () => {
  //   setState(arr2);
  // };
  const [data, setData] = useState([]);
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  //  obbj= {
  //     name:name,
  //     age:age
  //   }
  //   setData([
  //     ...data,obj
  //   ])
  // let obj = {};
  const setNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const setAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setData([...data, { name: enteredName, age: enteredAge }]);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const updateName = (value) => {
    setData([...data, { name: value, age: enteredAge }]);
  };
  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" onChange={setNameHandler} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" onChange={setAgeHandler} />
      </div>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>

      <Card1 data={data} updateName={updateName} />
      {/* <ul>
      {data.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      {/* <h1>Hello World! {state}!</h1>
      <button type="button" onClick={changeArr}>
        click
      </button>
      <Card />
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {Persons.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
      {/* <div>
        <Card name="sina"></Card>
      </div> */}
    </div>
  );
}

export default App;
