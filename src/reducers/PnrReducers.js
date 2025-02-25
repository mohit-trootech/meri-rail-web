import { dispatcherActions } from "../utils/contants";

export const PnrReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.SET_PNR:
      return action.payload;
    default:
      return state;
  }
};
