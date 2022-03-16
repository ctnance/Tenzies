import React from "react";
import Die from "./Die";
import RollButton from "./RollButton";

export default function Main() {
  let [dice, setDice] = React.useState(generateNewDice());

  function getRandomDieNum() {
    return Math.ceil(Math.random() * 6);
  }

  function generateNewDice() {
    let dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push({
        id: i,
        value: getRandomDieNum(),
        isLocked: false,
      });
    }
    return dice;
  }

  function rollDice() {
    if (dice.length === 0) {
      setDice(generateNewDice());
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.isLocked
            ? die
            : {
                ...die,
                value: getRandomDieNum(),
              };
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
      <div className="dice-container">{diceElements}</div>
      <RollButton rollDice={rollDice} />
    </main>
  );
}
