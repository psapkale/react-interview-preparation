import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider/themeContext";

export const Navbar = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);

   return (
      <nav className="navbar">
         <div>Navbar</div>
         <div className="mode-switch">
            <input
               type="checkbox"
               checked={theme === "dark"}
               onChange={toggleTheme}
            />
            <span className="slider-round"></span>
         </div>
      </nav>
   );
};
