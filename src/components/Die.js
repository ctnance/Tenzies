import React from "react";

export default function Die(props) {
  return (
    <div
      onClick={(e) => props.toggleLocked(e, props.id)}
      className={props.isLocked ? "die locked" : "die"}
    >
      <p className="die-number">{props.value}</p>
    </div>
  );
}
