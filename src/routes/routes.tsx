import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

export const routes = [
  {path: "/", component: HomePage, exact: true},
  {path: "/about", component: AboutPage, exact: false},
];
