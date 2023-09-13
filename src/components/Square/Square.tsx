import { ISquare } from "./";

export default function Square({ value, onSquareClick }: ISquare) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
