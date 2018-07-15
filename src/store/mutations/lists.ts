import { IStoreState } from "../../types/store";
import { List } from "../../types/index";

export const setInitialListDetails = (state: IStoreState, payload): void => {
  state.listName = payload.listName;
  state.organiserName = payload.organiserName;
};

export const sendSantasSuccess = (state: IStoreState): void => {
  state = {
    listName: "",
    organiserName: "",
    list: undefined,
  };
};
