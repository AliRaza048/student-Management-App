import { SERVER_API } from "../helpers/variable";

export default function Auth() {
  async function signUPUser(user) {
    const response = await fetch(`${SERVER_API}/user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create the post");
    }
    return response.json();
  }

  async function signInUser(user) {
    const response = await fetch(`${SERVER_API}/user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create the post");
    }
    return response.json();
  }

  return {
    signUPUser,
    signInUser,
  };
}
