import React from "react";

export default function Die(props) {
  return (
    <div onClick={props.lockDie} className={props.isLocked ? "die locked" : "die"}>
      <p className="die-number">{props.value}</p>
    </div>
  );
}
