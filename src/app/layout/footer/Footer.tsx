import React from "react";

import { StyledFooter } from "../../styles/common/layout.styles";
import { StyledWrapper, StyledLink } from "../../styles/common/common.styles";
import { GithubIcon, EmailIcon } from "../../components/common/svg/icons";

type email = string;
type url = string;

interface IAuthor {
  name: string;
  email: email;
  github: {
    name: string;
    link: url;
  };
}
const authorData: IAuthor = {
  name: "Nofar Baranes",
  email: "Nunibaranes@gmail.com",
  github: {
    name: "nunibaranes",
    link: "https://github.com/nunibaranes",
  },
};

export default function Footer() {
  const { github, email } = authorData;

  return (
    <StyledFooter className="footer" id="footer">
      <StyledWrapper noPadding>
        <StyledLink className="github" href={github.link} target="_blank">
          <GithubIcon />
          <span>{github.name}</span>
        </StyledLink>
        <StyledLink className="email" href={`mailto:${email.toLowerCase()}`}>
          <EmailIcon />
          <span>{email}</span>
        </StyledLink>
      </StyledWrapper>
    </StyledFooter>
  );
}
