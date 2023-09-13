import { TSquare } from '../Board'

export interface ISquare {
  value: TSquare
  onSquareClick: () => void
}
