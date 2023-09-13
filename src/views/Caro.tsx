import { ChangeEvent, useEffect, useState } from "react";

import Board, { TSquare } from "../components/Board";
import { calculateWinnerLinesMatched } from "../utils";

export default function Caro() {
  const [cells, setCells] = useState(10);
  const [currentMove, setCurrentMove] = useState(0);
  const [linesMatched, setLinesMatched] = useState<number[][]>([]);
  const [history, setHistory] = useState<TSquare[][]>([Array(cells * cells).fill(null)]);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares: TSquare[] = history[currentMove];

  useEffect(
    () => {
      const lines = calculateWinnerLinesMatched(cells);
      setLinesMatched(lines);
    },
    [cells]
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (value < 5) setCells(5);
    else if (value > 15) setCells(15);
    else setCells(value);
  }

  function handlePlay(nextSquares: TSquare[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="caro-wrapper">
      <h2>Play Caro</h2>
      <div className="cells">
        <label htmlFor="cells">Cells x Cells</label>
        <input type="number" id="cells" name="cells" value={cells} onChange={handleChange} />
      </div>
      <div className="game" style={{ flexDirection: `${cells > 8 ? "column" : "row"}` }}>
        <div className="game-board" style={{ width: cells * 34 }}>
          <Board xIsNext={xIsNext} squares={currentSquares} cells={cells} linesMatched={linesMatched} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
