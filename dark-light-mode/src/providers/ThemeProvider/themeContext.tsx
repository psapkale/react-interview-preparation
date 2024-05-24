import { createContext } from "react";

interface ThemeContextProps {
   theme: string;
   toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
   theme: "light",
   toggleTheme: () => {},
});
