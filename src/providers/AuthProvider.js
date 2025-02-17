/**Auth Provider */
import { useReducer } from "react";
import { AuthContext } from "../context/Context";
import { AuthReducer } from "../reducers/AuthReducers";
import { BaseUrlPath, dispatcherActions } from "../utils/contants";
import { PostRequest } from "../utils/AxiosRequest";
import { LoadingToast } from "../utils/ToastMessage";

const LOGIN_PATH = "auth/login/";
const REGISTER_PATH = "auth/register/";
const GOOGLE_LOGIN_PATH = "auth/auth-google-login/";
const GOOGLE_RESIGTER_PATH = "auth/auth-google-signup/";
const AuthProvider = ({ children }) => {
  /**Toggle Password Visibility State */
  let id = null;
  const [auth, AuthDispatch] = useReducer(AuthReducer, null);
  const [user, UserDispatch] = useReducer(AuthReducer, null);
  const loginUser = async (data) => {
    id = LoadingToast("Logging In...");
    const response = await PostRequest(
      BaseUrlPath + LOGIN_PATH,
      data,
      null,
      null,
      id
    );
    response &&
      AuthDispatch({ type: dispatcherActions.LOGIN, payload: response.data });
    if (response.data) {
      window.location.href = "/";
    }
  };
  const logOut = async () => {
    AuthDispatch({ type: dispatcherActions.LOGOUT, payload: null });
  };

  const registerUser = async (data) => {
    id = LoadingToast("Registering User...");
    const response = await PostRequest(
      BaseUrlPath + REGISTER_PATH,
      data,
      null,
      null,
      id
    );
    response &&
      AuthDispatch({
        type: dispatcherActions.REGISTER,
        payload: response.data,
      });
    if (response.data) {
      window.location.href = "/auth/login/";
    }
  };
  const googleAuthLogin = async (data) => {
    id = LoadingToast("Logging In...");
    const response = await PostRequest(
      BaseUrlPath + GOOGLE_LOGIN_PATH,
      data,
      null,
      null,
      id
    );
    response &&
      AuthDispatch({
        type: dispatcherActions.LOGIN,
        payload: response.data,
      });
    if (response.data) {
      window.location.href = "/";
    }
  };
  const googleAuthRegister = async (data) => {
    id = LoadingToast("Registering User...");
    const response = await PostRequest(
      BaseUrlPath + GOOGLE_RESIGTER_PATH,
      data,
      null,
      null,
      id
    );
    response &&
      AuthDispatch({
        type: dispatcherActions.REGISTER,
        payload: response.data,
      });
    if (response.data) {
      window.location.href = "/auth/login/";
    }
  };

  const data = {
    auth,
    loginUser,
    logOut,
    user,
    registerUser,
    googleAuthLogin,
    googleAuthRegister,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
