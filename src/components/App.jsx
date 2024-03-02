import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [items, setItems] = useState([]);

  function addList(list) {
    setItems((prevValue) => {
      return [...prevValue, list];
    });
  }

  function deleteItems (id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        // console.log(index);
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addList}/>
      <div>
        <ul>
          {items.map((item, index) => (
            < ToDoItem
              key={index}
              id={index}
              onChecked={deleteItems}
              text={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
