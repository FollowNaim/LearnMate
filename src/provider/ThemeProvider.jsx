import { getTheme, saveTheme } from "@/lib/save-to-local";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(getTheme() === "dark" ? true : false);
  useEffect(() => {
    document.body.classList.add(getTheme());
    saveTheme(isDark);
  }, [isDark]);
  const toggleTheme = (theme) => {
    if (theme) {
      document.body.classList.add("dark");
      saveTheme(theme);
      setIsDark(theme);
    } else if (!theme) {
      document.body.classList.remove("dark");
      saveTheme(theme);
      setIsDark(theme);
    }
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
