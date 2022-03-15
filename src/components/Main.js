import React from "react";
import Die from "./Die";

export default function Main() {
  let dice = [];
  for (let i = 0; i < 10; i++) {
    dice.push(<Die value={Math.floor(Math.random() * 6 + 1)} />);
  }
  return (
    <main>
      <div className="dice-container">{dice}</div>
    </main>
  );
}
