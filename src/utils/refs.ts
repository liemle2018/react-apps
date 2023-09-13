import { useRef, useEffect } from 'react'

export function usePrevious(value: boolean | number) {
  const ref = useRef<undefined | boolean | number>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
