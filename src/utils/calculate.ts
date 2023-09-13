import { TSquare } from '../components/Board'

export function calculateWinnerLinesMatched(cells: number): number[][] {
  const steps = 5
  const linesMatched: number[][] = []

  for (let i = 0; i < cells; i++) {
    for (let j = i * cells; j + steps <= i * cells + cells; j++) {
      const lineMatched = []
      let k = j
      while (k < j + steps) {
        lineMatched.push(k)
        k++
      }
      linesMatched.push(lineMatched)
    }
  }

  for (let i = 0; i < cells; i++) {
    for (let j = i; j <= i + cells * (cells - steps); j = j + cells) {
      const lineMatched = []
      let k = j
      while (k < j + cells * steps) {
        lineMatched.push(k)
        k += cells
      }
      linesMatched.push(lineMatched)
    }
  }

  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < steps; j++) {
      const lineForwardMatched = []
      const lineBackMatched = []
      let k = 0

      while (k < steps) {
        if (j <= cells - steps) {
          const vForward = k * cells + k + j + i * cells
          lineForwardMatched.push(vForward)
        }

        if (j >= cells - steps) {
          const vBackward = j + (cells - 1) * k + i * cells
          lineBackMatched.push(vBackward)
        }
        k++
      }

      linesMatched.push(lineForwardMatched)
      linesMatched.push(lineBackMatched)
    }
  }

  return linesMatched
}

export function calculateWinner(squares: TSquare[], lineMatched: number[][]) {
  for (let i = 0; i < lineMatched.length; i++) {
    const [a, b, c, d, f] = lineMatched[i]
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d] &&
      squares[a] === squares[f]
    ) {
      return squares[a]
    }
  }
  return null
}
