import React from "react";

export default function RerollButton(props) {
  return (
    <button className="roll-dice-btn" onClick={props.rerollDice}>
      Roll
    </button>
  );
}
