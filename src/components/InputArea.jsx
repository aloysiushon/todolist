import React, {useState} from "react";

function InputArea(props) {
  const [list, setList] = useState("");

  function getInput(event) {
    const newValue = event.target.value;
    setList(newValue);
    // console.log(newValue)
  }
  return(
    <div className="form">
        <input onChange={getInput} value={list} type="text" />
        <button onClick={() => {
          props.onAdd(list);
          setList("");
        }}>
          <span>Add</span>
        </button>
      </div>
  )

}

export default InputArea;
