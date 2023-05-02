import React from "react";

const Scoreboard = () => {
  return (
    <div className="Scoreboard-wrapper">
      <div className="Rps">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="Score-counter">
        <p className="Score-title">SCORE</p>
        <p className="Score">12</p>
      </div>
    </div>
  );
};

export default Scoreboard;
