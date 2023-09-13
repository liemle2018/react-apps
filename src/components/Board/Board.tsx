import Square from "../Square";
import { IBoard, TSquare } from ".";
import { calculateWinner } from "../../utils";

export default function Board({ xIsNext, squares, cells, linesMatched, onPlay }: IBoard) {
  function handleClick(i: number) {
    if (calculateWinner(squares, linesMatched) || squares[i]) {
      return;
    }
    const nextSquares: TSquare[] = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares, linesMatched);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const boardRowList = [];
  for (let i = 0; i < cells; i++) {
    const squareList = [];
    for (let j = 0; j < cells; j++) {
      const value = i * cells + j;
      squareList.push(<Square key={value} value={squares[value]} onSquareClick={() => handleClick(value)} />);
    }
    boardRowList.push(
      <div className="board-row" key={i}>
        {squareList}
      </div>
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {boardRowList}
    </>
  );
}
