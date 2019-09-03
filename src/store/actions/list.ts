import { List } from "../../types";
import axios from "axios";

export const sendSantas = async ({ commit, dispatch }, payload: List) => {
  try {
    const response = await axios.post(
      "https://1dnum313k1.execute-api.ap-southeast-2.amazonaws.com/prod/assign",
      payload,
    );
    return response;
  } catch (err) {
    console.log("ERROR:", err);
    return err;
  }
};
