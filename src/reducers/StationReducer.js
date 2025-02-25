import { dispatcherActions } from "../utils/contants";

export const StationReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.SET_STATIONS:
      return action.payload;
    case dispatcherActions.SET_STATION:
      return action.payload;
    default:
      return state;
  }
};
