import React, { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Footer from "./layout/footer/Footer";

import { StyledApp } from "./styles/common/layout.styles";
export interface ITheme {
  isDarkMode: boolean;
  toggleLabel: string;
}

const initialTheme: ITheme = {
  isDarkMode: false,
  toggleLabel: "Set Dark Mode",
};

interface IThemeOptions {
  theme: ITheme;
  setTheme: React.Dispatch<React.SetStateAction<ITheme>>;
}

export const ThemeContext = createContext<IThemeOptions | null>(null);

export default function App() {
  const [theme, setTheme] = useState(initialTheme);

  const themeOptions = { theme, setTheme };

  return (
    <StyledApp className="app">
      <Router>
        <ThemeContext.Provider value={themeOptions}>
          <Header></Header>
          <Main></Main>
        </ThemeContext.Provider>
        <Footer></Footer>
      </Router>
    </StyledApp>
  );
}
