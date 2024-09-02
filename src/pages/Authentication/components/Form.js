import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { Button } from "@mui/material";

const Form = () => {
  return (
    <React.Fragment>
      <ul className="flex items-center gap-1 p-4 cursor-pointer">
        <img src={require("../../../assets/download.png")} className="w-10" />
        <h1 className="text-3xl font-semibold">DNX</h1>
      </ul>
      <main className="flex justify-center items-center">
        <section className="bg-white p-4 rounded-md	form">
          <h2 className="text-center text-3xl font-semibold mb-1">Sign In</h2>
          <p className="text-center">Welecome back! Lets continue with,</p>
          <div className="flex gap-4">
            <Button className="form__authButton">
              <img
                src={require("../../../assets/google.png")}
                className="w-5"
              />
              Google
            </Button>
            <Button className="form__authButton">
              <AppleIcon /> Apple
            </Button>
          </div>
          <div className="flex gap-2 items-center text-nowrap	mt-3 ">
            <hr className="form__border"></hr>
            <h3 className="text-center text-md font-semibold mb-1 form__text">
              or Signin With
            </h3>
            <hr className="form__border"></hr>
          </div>
          <form></form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Form;
