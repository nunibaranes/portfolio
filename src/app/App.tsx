import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Footer from "./layout/footer/Footer";

import { StyledApp } from "./styles/common/layout.styles";

export default function App() {
  return (
    <StyledApp className="app">
      <Router>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </StyledApp>
  );
}
