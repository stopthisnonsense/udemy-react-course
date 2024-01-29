import { useState } from "react";
export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let editing = isEditing || false;

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if( isEditing ) {
        editablePlayerName = <input type="text" onChange={handleChange} defaultValue={playerName} />;
    }

    const handleClick =  () => {
        setIsEditing((editing) => !editing);
        if( isEditing ) {
            onChangeName(symbol, playerName);
        }

    }
    function handleChange(event)  {
        setPlayerName(event.target.value)
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={
               handleClick
                }>{ isEditing ? ('Save') : ('Edit')} </button>
          </li>
    )
}