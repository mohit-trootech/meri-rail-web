import { updateLocalStorage, removeLocalStorage } from "../utils/utils";
import { dispatcherActions } from "../utils/contants";
const REFRESH_TOKEN = "refresh";
const ACCESS_TOKEN = "access";
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case dispatcherActions.LOGIN:
      updateLocalStorage(REFRESH_TOKEN, action.payload.refresh);
      updateLocalStorage(ACCESS_TOKEN, action.payload.access);
      return action.payload;
    case dispatcherActions.LOGOUT:
      removeLocalStorage(ACCESS_TOKEN, action.payload.access);
      removeLocalStorage(REFRESH_TOKEN, action.payload.refresh);
      return null;
    case dispatcherActions.REGISTER:
      return null;
    default:
      return state;
  }
};
