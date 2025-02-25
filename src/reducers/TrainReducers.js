import { dispatcherActions } from "../utils/contants";

export const TrainReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.SET_TRAINS:
      return action.payload;
    case dispatcherActions.SET_TRAIN:
      return action.payload;
    default:
      return state;
  }
};
