import { IRoute } from "../interfaces/common/router";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import JobExperience from "../pages/job-experience/JobExperience";
import Skills from "../pages/skills/Skills";
import Portfolio from "../pages/portfolio/Portfolio";
import Resume from "../pages/resume/Resume";
import Games from "../pages/games/Games";
import NotFound from "../pages/not-found/NotFound";
import {
  HOME_ID,
  RESUME_ID,
  ABOUT_ID,
  JOB_EXPERIENCE_ID,
  SKILLS_ID,
  PORTFOLIO_ID,
  GAMES_ID,
  NOT_FOUND_ID,
} from "./constants";

export const HOME: IRoute = {
  id: HOME_ID,
  path: "/",
  exact: true,
  component: Home,
  hidden: true,
};

export const RESUME: IRoute = {
  title: "Resume",
  id: RESUME_ID,
  path: `/${RESUME_ID}`,
  exact: true,
  component: Resume,
  hidden: true,
};

export const ABOUT: IRoute = {
  title: "About",
  id: ABOUT_ID,
  path: `/${ABOUT_ID}`,
  exact: true,
  component: About,
};

export const JOB_EXPERIENCE: IRoute = {
  title: "Job Experience",
  id: JOB_EXPERIENCE_ID,
  path: `/${JOB_EXPERIENCE_ID}`,
  exact: true,
  component: JobExperience,
};

export const SKILLS: IRoute = {
  title: "Skills",
  id: SKILLS_ID,
  path: `/${SKILLS_ID}`,
  exact: true,
  component: Skills,
};

export const PORTFOLIO: IRoute = {
  title: "Portfolio",
  id: PORTFOLIO_ID,
  path: `/${PORTFOLIO_ID}`,
  exact: true,
  component: Portfolio,
};

export const GAMES: IRoute = {
  id: GAMES_ID,
  title: "Games",
  path: `/${GAMES_ID}`,
  component: Games,
  hidden: true,
};

export const NOT_FOUND: IRoute = {
  id: NOT_FOUND_ID,
  title: "Not Found 404",
  path: `/${NOT_FOUND_ID}`,
  component: NotFound,
  hidden: true,
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

export const routesNavigation = routes.filter((route) => !route.hidden);
