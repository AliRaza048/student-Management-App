import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  element={<Page/>} path="/"/>
      <Route  element={<SignIn/>} path="/signin" />
      <Route  element={<SignUp/>} path="/signup" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
