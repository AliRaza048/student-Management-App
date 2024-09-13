import React from "react";
import { routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            Component={route.component}
            key={route.path}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
