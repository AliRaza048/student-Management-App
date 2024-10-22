import Page from "../components/Page";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Overview from "../pages/StudentPortal/Overview";
import Task from "../pages/StudentPortal/Task";
export const routes = [
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
    name: "studentAdmin",
    path: "/",
    component: Page,
    privateRouting: "studentAdmin",
    subRoutes: [
      {
        name: "overview",
        path: "overview",
        component: Overview,
        isPrivate: true,
      },
      {
        name: "task",
        path: "task",
        component: Task,
        isPrivate: true,
      },
    ],
  },
];
