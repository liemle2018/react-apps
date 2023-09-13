import { ISquare } from "./";

export default function Square({ value, onSquareClick }: ISquare) {
  return (
    <button className="square" onClick={onSquareClick} style={{ color: value === "X" ? "red" : "" }}>
      {value}
    </button>
  );
}
