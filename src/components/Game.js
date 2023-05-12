import React from "react";
import IconPaper from "../images/icon-paper.svg";
import IconRock from "../images/icon-rock.svg";
import IconScissors from "../images/icon-scissors.svg";

const Game = ({ playerChoice, computerChoice, result, resetGame }) => {
  return (
    <div>
      <div className="Game-Container">
        <div className="Player-Choice-Selection-Container">
          {playerChoice === "Paper" ? (
            <div className="Outer-Circle-Paper Outer-Circle" title="Paper!">
              <div className="Inner-Circle">
                <img src={IconPaper} alt="Paper" className="Paper" />
              </div>
            </div>
          ) : (
            ""
          )}

          {playerChoice === "Rock" ? (
            <div className="Outer-Circle-Rock Outer-Circle" title="Rock!">
              <div className="Inner-Circle">
                <img src={IconRock} alt="Rock" className="Rock" />
              </div>
            </div>
          ) : (
            ""
          )}

          {playerChoice === "Scissors" ? (
            <div className="Outer-Circle-Scissors Outer-Circle" title="Scissors!">
              <div className="Inner-Circle">
                <img src={IconScissors} alt="Scissors" className="Scissors" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        VS
        <div className="Computer-Choice-Selection-Container">
          {computerChoice === "Paper" ? (
            <div className="Outer-Circle-Paper Outer-Circle" title="Paper!">
              <div className="Inner-Circle">
                <img src={IconPaper} alt="Paper" className="Paper" />
              </div>
            </div>
          ) : (
            ""
          )}

          {computerChoice === "Rock" ? (
            <div className="Outer-Circle-Rock Outer-Circle" title="Rock!">
              <div className="Inner-Circle">
                <img src={IconRock} alt="Rock" className="Rock" />
              </div>
            </div>
          ) : (
            ""
          )}

          {computerChoice === "Scissors" ? (
            <div className="Outer-Circle-Scissors Outer-Circle" title="Scissors!">
              <div className="Inner-Circle">
                <img src={IconScissors} alt="Scissors" className="Scissors" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <h2>{result}</h2>
      <button onClick={() => resetGame()}>Play Again</button>
    </div>
  );
};

export default Game;
