import { IStoreState } from "../../types/store";
import { List } from "../../types/index";

export const setInitialListDetails = (state: IStoreState, payload): void => {
  state.listName = payload.listName;
  state.organiserName = payload.organiserName;
};

export const updateListDetails = (state: IStoreState, payload): void => {
  state.list.name = state.listName;
  state.list.organiserName = state.organiserName;
  state.list.giftDay = payload.giftDay;
  state.list.value = payload.value;
};

export const saveSantas = (state: IStoreState, payload): void => {
  state.list.santas = [];
  for (let santa of payload) {
    state.list.santas.push(santa);
  }
};

export const sendSantasSuccess = (state: IStoreState): void => {
  state = {
    listName: "",
    organiserName: "",
    list: {
      name: "",
    } as List,
  };
};
