import { createContext, useContext, useState } from "react";

const themeContext = createContext<{ theme: string; toggleTheme: Function }>({
  theme: "light",
  toggleTheme: () => null,
});

const ThemeProvider = ({ children }: { children: any }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { ThemeProvider, useTheme };
