import React from "react";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";

const images = {
  IconPaper,
  IconRock,
  IconScissors,
};

const Game = ({ playerChoice, computerChoice, result, resetGame }) => {
  const renderChoice = (choice) => {
    return (
      <div className={`Outer-Circle-${choice} Outer-Circle`} title={`${choice}!`}>
        <div className="Inner-Circle">
          <img src={images[`Icon${choice}`]} alt={choice} className={choice} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="Game-Container">
        <div className="Player-Choice-Selection-Container">{playerChoice && renderChoice(playerChoice)}</div>
        <h2>VS</h2>
        <div className="Computer-Choice-Selection-Container">{computerChoice && renderChoice(computerChoice)}</div>
      </div>
      <h2>{result}</h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Game;
