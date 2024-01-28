import React, { useState } from "react";

function App() {
  const [ListItem, setList] = useState([]);

  const [itemName, setItem] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setItem(event.target.value);
  }

  function addItem() {
    setList((prevList) => [...prevList, itemName]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={itemName}
          onChange={handleChange}
          placeholder="Enter Item"
          type="text"
        />
        <button type="reset" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {ListItem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
