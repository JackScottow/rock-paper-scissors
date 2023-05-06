import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Selection from "./components/Selection";
import Game from "./components/Game";
import "./Css/App.css";

const CHOICES = ["rock", "paper", "scissors"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    setPlayerChoice(choice);
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setComputerChoice(computerChoice);
    if (choice === computerChoice) {
      setResult("Tie");
    } else if ((choice === "rock" && computerChoice === "scissors") || (choice === "paper" && computerChoice === "rock") || (choice === "scissors" && computerChoice === "paper")) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  }
  function testFn(e) {
    console.log(e);
  }

  return (
    <div className="App">
      <Scoreboard />
      {!playerChoice ? <Selection /> : <Game playerChoice={playerChoice} computerChoice={computerChoice} handlePlayerChoice={handlePlayerChoice} testFn={testFn} />}
      <div>
        {CHOICES.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && (
        <div>
          <h2>You chose {playerChoice}</h2>
          <h2>Computer chose {computerChoice}</h2>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
