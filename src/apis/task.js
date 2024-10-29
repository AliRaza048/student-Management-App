import { SERVER_API } from "../helpers/variable";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function task() {
  const naviagte = useNavigate();
  async function addTask(task) {
    const response = await fetch(`${SERVER_API}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    return response.json;
  }
}
return {};
