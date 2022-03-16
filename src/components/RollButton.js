import React from "react";

export default function RerollButton(props) {
  return (
    <button className="roll-dice-btn" onClick={props.rollDice}>
      {props.gameWon ? "New Game" : "Roll"}
    </button>
  );
}
