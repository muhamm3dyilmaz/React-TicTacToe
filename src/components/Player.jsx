import { useState } from "react";

export default function Player({ initialName, symbol, isActive }){
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditClick() {
    // '!isEditing' shorter way to type isEditing ? false : true
    // (editing) => !editing is best practise and common pattern for setting states like true false
    setIsEditing((editing) => !editing);
  }

  //this func for editing the player name
  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if(isEditing){
    editablePlayerName = <input type="text" defaultValue={playerName} onChange={handleChange} required />;
  }

    return (
        <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    );
}