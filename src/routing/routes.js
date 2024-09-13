import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";

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
];
