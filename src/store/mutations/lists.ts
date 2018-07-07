import { IStoreState } from "../../types/store";

export const setInitialListDetails = (state: IStoreState, payload): void => {
  state.listName = payload.listName;
  state.organiserName = payload.organiserName;
};
