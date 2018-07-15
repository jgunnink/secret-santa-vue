import { List } from "../../types/index";
import axios from "axios";

export const sendSantas = async ({ commit, dispatch }, payload: List[]) => {
  try {
    // const response = await axios.post("http://localhost:8082/test", santas);
    const response = console.log(payload);
    console.log("SUCCESS", response);
    return response;
  } catch (err) {
    console.log("ERROR:", err);
    return err;
  }
};
