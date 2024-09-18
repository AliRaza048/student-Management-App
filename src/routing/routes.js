import Page from "../components/Page";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Overview from "../pages/StudentPortal/Overview";
export const routes = [
  {
    name: "dashboard",
    path: "/",
    component: Page,
    isPrivate: false,
  },
  {
    name: "signin",
    path: "/signin",
    component: SignIn,
    isPrivate: true,
  },
  {
    name: "signup",
    path: "/signup",
    component: SignUp,
    isPrivate: true,
  },
  {
    name: "overview",
    path: "/overview",
    component: Overview,
    isPrivate: true,
  },
];
