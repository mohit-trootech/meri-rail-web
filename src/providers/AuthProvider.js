/**Auth Provider */
/* eslint-disable */
import { useReducer, useEffect, useContext, useState } from "react";
import { AuthContext, UtilsContext } from "../context/Context";
import { AuthReducer } from "../reducers/AuthReducers";
import {
  BaseUrlPath,
  dispatcherActions,
  LoadingMessages,
  IGNORE_URL_PATHS,
} from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { GetRequest, PostRequest, PatchRequest } from "../utils/AxiosRequest";
import { LoadingToast } from "../utils/ToastMessage";
import { handleLogin, profileUpdateSuccess } from "../utils/handleResponses";
import { LogOut } from "../utils/LogOut";
const LOGIN_PATH = "auth/google/login/";
const GOOGLE_INIT = "auth/google/init/";
const AUTHENTICATED_USER = "auth/profile/me/";
const USER_DETAILS = "auth/profile/";

const AuthProvider = ({ children }) => {
  /**Toggle Password Visibility State */
  let id = null;
  const { updatePreloader } = useContext(UtilsContext);
  const [auth, AuthDispatch] = useReducer(AuthReducer, null);
  const [user, UserDispatch] = useReducer(AuthReducer, null);
  const [details, setDetails] = useState(null);

  const getUserDetails = async () => {
    if (user) {
      const response = await GetRequest(
        BaseUrlPath + USER_DETAILS + user.id,
        getBearerToken
      );
      response && setDetails(response.data);
    }
  };
  const updateUserDetails = async (data) => {
    id = LoadingToast(LoadingMessages.PROFILE_UPDATE);
    const response = await PatchRequest(
      BaseUrlPath + USER_DETAILS + user.id + "/",
      data,
      getBearerToken,
      profileUpdateSuccess,
      id
    );
    response && setDetails(response.data);
    response && authenticatedUser();
  };

  const logOutHandler = () => {
    AuthDispatch({
      type: dispatcherActions.LOGOUT,
      payload: null,
    });
    LogOut();
  };
  const authenticatedUser = async () => {
    const res = await GetRequest(
      BaseUrlPath + AUTHENTICATED_USER,
      getBearerToken,
      null,
      null,
      updatePreloader
    );
    res &&
      UserDispatch({
        type: dispatcherActions.ME,
        payload: res.data,
      });
  };

  // useEffect(() => {
  //   if (!IGNORE_URL_PATHS.includes(window.location.pathname)) {
  //     authenticatedUser();
  //   }
  // }, []);
  const googleAuthLogin = async (data) => {
    id = LoadingToast(LoadingMessages.LOGIN);
    const response = await PostRequest(
      BaseUrlPath + LOGIN_PATH,
      data,
      null,
      handleLogin,
      id
    );
    response &&
      AuthDispatch({
        type: dispatcherActions.LOGIN,
        payload: response.data,
      });
  };
  const googleAuthRegister = async () => {
    window.open(BaseUrlPath + GOOGLE_INIT, "_blank").focus();
  };

  const data = {
    auth,
    user,
    details,
    logOutHandler,
    googleAuthLogin,
    googleAuthRegister,
    getUserDetails,
    updateUserDetails,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
