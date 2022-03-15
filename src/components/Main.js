import React from "react";
import Die from "./Die";
import RollButton from "./RollButton";

export default function Main() {
  let [dice, setDice] = React.useState(generateNewDice());

  function generateNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(<Die value={Math.ceil(Math.random() * 6)} />);
    }
    return dice;
  }

  function rerollDice() {
    setDice(generateNewDice());
  }
  return (
    <main>
      <div className="dice-container">{dice}</div>
      <RollButton rerollDice={rerollDice} />
    </main>
  );
}
