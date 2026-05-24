
import { useState } from "react";

function RollDice() {
    const [dice, setDice] = useState(1);
    const [history, setHistory] = useState([]);

 function rollDice() {
  const  newroll = Math.floor(Math.random() * 6) + 1;
            setDice(newroll);
            setHistory([...history, newroll]);
 }

  return (
    <div>
        
         <button onClick={rollDice}>
            Roll Dice
        </button>
        <p>Current Roll: {dice}</p>
        <p>History: {history.join(', ')}</p>
    </div>
  );
}

export default RollDice;