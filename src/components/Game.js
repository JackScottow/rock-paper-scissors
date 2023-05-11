import React from "react";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";

const Game = ({ playerChoice, computerChoice, result, resetGame }) => {
  return (
    <div>
      <h2>You chose {playerChoice}</h2>
      <h2>Computer chose {computerChoice}</h2>
      <h2>{result}</h2>
      <button onClick={() => resetGame()}>Reset Game</button>
    </div>
  );
};

export default Game;
