import React from "react";
import Die from "./Die";
import RollButton from "./RollButton";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Main() {
  let [tenzies, setTenzies] = React.useState(false);
  let [dice, setDice] = React.useState(generateNewDice());

  React.useEffect(() => {
    const allDiceLocked = dice.every((die) => die.isLocked);
    const firstDieValue = dice[0].value;
    const allValuesMatch = dice.every((die) => die.value === firstDieValue);
    if (allDiceLocked && allValuesMatch) {
      setTenzies(true);
      console.log("YOU WON!");
    }
  }, [dice]);

  function getRandomDieNum() {
    return Math.ceil(Math.random() * 6);
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: getRandomDieNum(),
      isLocked: false,
    };
  }

  function generateNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (dice.length === 0 || tenzies) {
      setDice(generateNewDice());
      setTenzies(false);
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
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current
        value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <RollButton gameWon={tenzies} rollDice={rollDice} />
    </main>
  );
}
