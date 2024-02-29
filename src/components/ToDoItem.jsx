import React, {useState} from "react";

function ToDoItem(props) {
  const [isLineThrough, setLineThrough] = useState(false)
  function lineThrough() {
    setLineThrough(prevValue => {
      return !prevValue
    });
  }
  return (
    <li onClick={lineThrough} style={{textDecoration: isLineThrough ? "line-through" : "none"}}>{props.text}</li>
  );
}


export default ToDoItem;
