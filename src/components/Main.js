import React from "react";
import Die from "./Die";
import RollButton from "./RollButton";

export default function Main() {
  let [dice, setDice] = React.useState(generateNewDice());

  function generateNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        id: i,
        value: Math.ceil(Math.random() * 6),
        isLocked: false,
      });
    }
    return dice;
  }

  function toggleLocked(event, id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        console.log(die.id === id);
        return die.id === id ? { ...die, isLocked: !die.isLocked } : die;
      });
    });
  }

  let diceElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isLocked={die.isLocked}
      toggleLocked={toggleLocked}
    />
  ));

  function rerollDice() {
    setDice(generateNewDice());
  }
  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <RollButton rerollDice={rerollDice} />
    </main>
  );
}
