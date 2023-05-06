import React from "react";

const Game = ({ playerChoice, computerChoice, handlePlayerChoice, testFn }) => {
  return (
    <div>
      GAME STARTED CHOSEN {playerChoice} vs {computerChoice}
      <button key="test" onClick={(e) => testFn(e)}>
        TEST
      </button>
    </div>
  );
};

export default Game;
