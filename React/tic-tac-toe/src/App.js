import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function hanleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const turn = xIsNext ? "X" : "O";
    const nextSquares = squares.slice();
    nextSquares[i] = turn;
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => hanleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => hanleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => hanleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => hanleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => hanleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => hanleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => hanleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => hanleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => hanleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? `Go to move#${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
