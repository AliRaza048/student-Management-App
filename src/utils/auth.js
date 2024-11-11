import Cookies from "js-cookie";
import { SERVER_API } from "../helpers/variable";

export async function verifyAuth() {
  const token = Cookies.get("token");

  try {
    const response = await fetch(`${SERVER_API}/auth`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
      return true;
    } else {
      throw new Error("Not authenticated");
    }
  } catch (error) {
    console.error("Authentication verfication failed", error);
    return false;
  }
}
