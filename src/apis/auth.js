import { SERVER_API } from "../helpers/variable";
import Cookies from "js-cookie";
export default function Auth() {
  async function signUPUser(user) {
    const response = await fetch(`${SERVER_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create the post");
    }
    return response.json();
  }

  async function signInUser(user) {
    try {
      const response = await fetch(`${SERVER_API}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }
      const data = await response.json();
      Cookies.set("token", data.token, { expires: 1 });
      console.log(data.token);
      return data;
    } catch (error) {
      console.error("Login Error", error);
      throw error;
    }
  }

  return {
    signUPUser,
    signInUser,
  };
}
