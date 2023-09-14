import { createContext, useContext } from 'react'

export type TTheme = 'light' | 'dark' | 'system'

export interface IThemeProvider {
  theme: TTheme
  setTheme: (theme: TTheme) => void
}

const ThemeContext = createContext<IThemeProvider | null>(null)

export const useThemeCtx = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext)
    throw new Error('useThemeCtx must be used within a Provider')

  return themeContext
}

export default ThemeContext
