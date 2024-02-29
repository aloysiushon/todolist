import React, {useState} from "react";

function App() {

  const [list, setList] = useState("");
  const [items, setItems] = useState([]);

  function getInput(event) {
    const newValue = event.target.value;
    setList(newValue);
    console.log(newValue)
  }

  function addList() {
    setItems((prevValue) => {
      return [...prevValue, list];
    });
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={getInput} value={list} type="text" />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
