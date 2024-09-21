import "./App.css";
// Import the useState to have the ability to have states in the app
import { useState } from "react";
import Board from "./components/Board";

// This is the top-level component
// Stores the history and current move state
function App() {
  // Saves the history state
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // Saves the current move state
  const [currentMove, setCurrentMove] = useState(0);
  // If the current move is even, then X is the next player.
  const isXNext = currentMove % 2 === 0;
  // This is the current state of the board
  const currentSquares = history[currentMove];

  // This will be called when a single square gets clicked
  // This is to update the state of the history
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // This will be called when the "go to" button is clicked
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Returns a list that will allow the user to jump to a
  // specific move including the previous ones
  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }

    // Challenge #1: For the current move only, show “You are at move #…” instead of a button.
    if (history[currentMove] === history[move] && currentMove > 0) {
      return (
        <li key={move}>
          <p>You are at move #{move}</p>
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isXNext={isXNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
