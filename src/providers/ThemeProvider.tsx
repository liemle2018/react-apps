import { PropsWithChildren, useMemo, useState } from "react";
import ThemeContext, { TTheme } from "../contexts/theme";

const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<TTheme>("system");

  const themeContext = useMemo(() => ({ theme, setTheme }), [theme]);

  return <Provider value={themeContext}>{children}</Provider>;
};

export default ThemeProvider;
