import { ThemeContext } from "@/provider/ThemeProvider";
import { useContext } from "react";

function useTheme() {
  const themeContext = useContext(ThemeContext);
  return themeContext;
}

export default useTheme;
