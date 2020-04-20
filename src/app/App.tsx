import React, { useState, createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/header/Header";
import PageNavigation from "./layout/page-navigation/PageNavigation";
import Main from "./layout/main/Main";
import Footer from "./layout/footer/Footer";

import "./styles/app.scss";
import {
  themeLabel,
  ILabelToggle,
} from "./components/common/toggle-button/ToggleButton";
export interface ITheme {
  isDarkMode: boolean;
  toggleLabel: ILabelToggle;
}

const initialTheme: ITheme = {
  isDarkMode: false,
  toggleLabel: themeLabel.off,
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
    <Router>
      <ThemeContext.Provider value={themeOptions}>
        <Header></Header>
        {/* <PageNavigation /> */}
        <Main></Main>
      </ThemeContext.Provider>
      <Footer></Footer>
    </Router>
  );
}
