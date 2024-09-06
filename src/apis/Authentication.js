import { SERVER_API } from "../helpers/variable";

export default function Authentication() {

  async function signUPUser(user) {
    debugger
    const response = await fetch(`${SERVER_API}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.Ok) {
      throw new Error("Failed to create the post");
    }
    return response.json();
  }

  return {
    signUPUser,
  };
}
