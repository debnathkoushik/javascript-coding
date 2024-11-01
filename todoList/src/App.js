import { React, useState } from 'react';

export default function App() {

  // for handling the input
  const [newInputItem, setNewInputItem] = useState("");

  // for deisplaying the list items
  const [listItems, setListItems] = useState(["Walk the dog", "Water the plants", "Wash the dishes"]);

  function onClickSubmit (){
    // add the new item to the list
    setListItems( listItems.concat(newInputItem.trim()));

    // clear the input field
    setNewInputItem("");
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" value={newInputItem} onChange={
          (event) => { setNewInputItem(event.target.value) }
        }/>
        <div>
          <button onClick={onClickSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {listItems.map( (listItem, index) => {
          return <li key={index}>{listItem} <button onClick={() => {
            setListItems( listItems.filter( (eachItem, eachItemIndex) => {return eachItemIndex !== index} ) );
          }}>Delete</button></li>
        })}
      </ul>
    </div>
  );
}
