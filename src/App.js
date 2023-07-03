import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Selection from "./components/Selection";
import Game from "./components/Game";
import "./Css/App.css";

const CHOICES = ["Rock", "Paper", "Scissors"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  function handlePlayerChoice(choice) {
    setPlayerChoice(choice);
    const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setComputerChoice(computerChoice);
    if (choice === computerChoice) {
      setResult("Tie");
    } else if ((choice === "Rock" && computerChoice === "Scissors") || (choice === "Paper" && computerChoice === "Rock") || (choice === "Scissors" && computerChoice === "Paper")) {
      setResult("You win!");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("Computer wins!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  }

  return (
    <div className="App">
      <Scoreboard score={score} />
      {!playerChoice ? <Selection handlePlayerChoice={handlePlayerChoice} /> : <Game playerChoice={playerChoice} computerChoice={computerChoice} result={result} resetGame={resetGame} />}
    </div>
  );
}

export default App;
