import { useState } from "react";

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

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
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
