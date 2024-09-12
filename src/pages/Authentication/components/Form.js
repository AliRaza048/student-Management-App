import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { Button } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Authentication from "../../../apis/Authentication";
import { useMutation } from "@tanstack/react-query";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Form = ({ title, userData, setUserData }) => {
  const navigate = useNavigate();
  const { signUPUser } = Authentication();
  const mutation = useMutation({
    mutationFn:signUPUser
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData)
  };
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();
    mutation.mutate(userData, {
      onSuccess: (data) => {
        console.log("Post create successfully:", data);
      },
      onError: (error) => {
        console.log("Error creating post:", error);
      },
    });
  };

  return (
    <React.Fragment>
      <ul className="flex items-center gap-1 p-4 cursor-pointer">
        <img src={require("../../../assets/download.png")} className="w-10" />
        <h1 className="text-3xl font-semibold">DNX</h1>
      </ul>
      <main className="flex justify-center items-center p-4">
        <section className="bg-white p-4 rounded-md	form">
          <h2 className="text-center text-2xl font-semibold mb-1">
            {title == "SignIn" ? "Sign In" : "Sign Up"}
          </h2>
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
              {title == "SignIn" ? "or SignIn With" : "or SignUP With"}
            </h3>
            <hr className="form__border"></hr>
          </div>
          <form onSubmit={handleSubmit}>
            {title == "SignIn" ? (
              <div className="flex items-center w-full p-1 mt-3 rounded-lg form__input mb-5">
                <AccountCircleOutlinedIcon
                  sx={{ color: "rgb(194, 198, 232)" }}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  value={userData.username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            ) : (
              null
            )}
            <div className="flex items-center w-full p-1 mt-3 rounded-lg form__input mb-5">
              <EmailOutlinedIcon sx={{ color: "rgb(194, 198, 232)" }} />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={userData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center w-full p-1 mt-3 rounded-lg form__input mb-3">
              <LockOutlinedIcon sx={{ color: "rgb(194, 198, 232)" }} />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={userData.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex text-nowrap gap-2 items-center">
                <Checkbox {...label} />
                <h3 className="text-sm font-medium form__text">Remember me</h3>
              </div>
              <h3 className="text-sm font-medium form__forgot">
                Forgot Password?
              </h3>
            </div>
            <Button
              type="submit"
              className=" flex justify-center w-full mb-6 form__authbutton"
            >
              {title == "SignIn" ? "Sign In" : "Sign Up"}
            </Button>
            <p className="w-full flex justify-center items-center mt-7">
              Don't have an account?
              <a
                className="form__forgot ml-1 cursor-pointer"
                onClick={
                  title == "SignIn"
                    ? () => navigate("/signup")
                    : () => navigate("/signin")
                }
              >
                {title == "SignIn" ? "Sign up" : "Sign in"}
              </a>
            </p>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Form;
