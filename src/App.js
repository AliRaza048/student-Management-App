import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Page from "./components/Page";
import SignIn from "./pages/Authentication/SignIn";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  element={<Page/>} path="/"/>
      <Route  element={<SignIn/>} path="/signin" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
