import { dispatcherActions } from "../utils/contants";

export const TbisReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.SET_TBIS:
      return action.payload;
    case dispatcherActions.RESET_DETAILS:
      return null;
    default:
      return state;
  }
};
