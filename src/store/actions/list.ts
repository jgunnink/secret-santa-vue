import { Santa } from "../../types/index";
import axios from "axios";

export const sendSantas = async ({ commit, dispatch }, santas: Santa[]) => {
  try {
    const response = await axios.post("http://localhost:8082/test", santas);
    console.log("SUCCESS", response);
    return response;
  } catch (err) {
    console.log("ERROR:", err);
    return err;
  }
};
