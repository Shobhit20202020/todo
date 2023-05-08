
import React, { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputList(event.target.value);
  };

  const handleAddItem = () => {
    if (inputList !== "") {
      setItems([...items, inputList]);
      setInputList("");
    }
  };

  const handleDeleteItem = (index) => {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => i !== index);
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add an item"
          value={inputList}
          onChange={handleInputChange}
        />
        <button onClick={handleAddItem}>+</button>
        <ol>
          {items.map((itemVal, index) => {
            return (
              <li key={index}>
                {itemVal}
                <button onClick={() => handleDeleteItem(index)}>-</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;







