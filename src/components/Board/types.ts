export type TSquare = 'X' | 'O' | null
export interface IBoard {
  xIsNext: boolean
  squares: TSquare[]
  cells: number
  linesMatched: number[][]
  onPlay: (nextSquares: TSquare[]) => void
}
