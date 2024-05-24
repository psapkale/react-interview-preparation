import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider/themeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
   const [theme, setTheme] = useState<string>("light");

   const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };
   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);

   return (
      <ThemeContext.Provider
         value={{
            theme,
            toggleTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
}
