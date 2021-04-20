import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext("light");

const UseContextTest  = () => {
  const [theme, setTheme] = useState("dark");

  return (
      <ThemeContext.Provider value={theme}>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Change Theme
        </button>
        <Content />
      </ThemeContext.Provider>
  );
};

const Content = () => {
  const theme = useContext(ThemeContext);
  return <h1>{theme}</h1>
}

export {UseContextTest}; 
