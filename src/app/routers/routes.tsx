import React from "react";

import { IRoute } from "../interfaces/common/router";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import JobExperience from "../pages/job-experience/JobExperience";
import Skills from "../pages/skills/Skills";
import Portfolio from "../pages/portfolio/Portfolio";
import Resume from "../pages/resume/Resume";
import Games from "../pages/games/Games";
import NotFound from "../pages/not-found/NotFound";

export const HOME: IRoute = {
  id: "home",
  path: "/",
  exact: true,
  component: Home,
};

export const RESUME: IRoute = {
  title: "Resume",
  id: "resume",
  path: "/resume",
  exact: true,
  component: Resume,
};

export const ABOUT: IRoute = {
  title: "About",
  id: "about",
  path: "/about",
  exact: true,
  component: About,
};

export const JOB_EXPERIENCE: IRoute = {
  title: "Job Experience",
  id: "job-experience",
  path: "/job-experience",
  exact: true,
  component: JobExperience,
};

export const SKILLS: IRoute = {
  title: "Skills",
  id: "skills",
  path: "/skills",
  exact: true,
  component: Skills,
};

export const PORTFOLIO: IRoute = {
  title: "Portfolio",
  id: "portfolio",
  path: "/portfolio",
  exact: true,
  component: Portfolio,
};

export const GAMES: IRoute = {
  id: "games",
  title: "Games",
  path: "/games",
  component: Games,
};

export const NOT_FOUND: IRoute = {
  id: "not-found",
  title: "Not Found 404",
  path: "/404",
  component: NotFound,
};

export const routes: IRoute[] = [
  HOME,
  ABOUT,
  JOB_EXPERIENCE,
  SKILLS,
  PORTFOLIO,
  RESUME,
  GAMES,
  NOT_FOUND,
];
