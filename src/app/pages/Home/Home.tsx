import React from "react";
import noonles from "../../../assets/images/nofarNoonles.jpg";
import headerBg from "../../../assets/images/header-bg.jpg";
import { StyledLink } from "../../styles/common/common.styles";

export default function Home() {
  return (
    <div>
      <img src={noonles} className="noonles" alt="Nofar Baranes" />
      <h1>Hi, I'm Nofar Baranes</h1>
    </div>
  );
}
