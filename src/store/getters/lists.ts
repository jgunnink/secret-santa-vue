import { IStoreState } from "../../types/store";
import { List } from "../../types";

export const list = (state: IStoreState): List => {
  return state.list;
};
