import { dispatcherActions } from "../utils/contants";

export const PnrReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.SET_PNR:
      return action.payload;
    case dispatcherActions.RESET_DETAILS:
      return null;
    default:
      return state;
  }
};
