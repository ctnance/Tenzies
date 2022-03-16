import React from "react";
import Die from "./Die";
import RollButton from "./RollButton";

export default function Main() {
  let [dice, setDice] = React.useState(generateNewDice());

  function getRandomDieNum() {
    return Math.ceil(Math.random() * 6);
  }

  function generateNewDie(id) {
    return {
      id: id,
      value: getRandomDieNum(),
      isLocked: false,
    };
  }

  function generateNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(generateNewDie(i));
    }
    return dice;
  }

  function rollDice() {
    if (dice.length === 0) {
      setDice(generateNewDice());
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.isLocked ? die : generateNewDie(die.id);
        });
      });
    }
    console.log(dice);
  }

  function lockDie(id) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
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
      lockDie={() => lockDie(die.id)}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current
        value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}
