/**Auth Provider */
import { useReducer, useEffect, useContext } from "react";
import { AuthContext, UtilsContext } from "../context/Context";
import { AuthReducer } from "../reducers/AuthReducers";
import {
  BaseUrlPath,
  dispatcherActions,
  LoadingMessages,
  IGNORE_URL_PATHS,
} from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { GetRequest, PostRequest } from "../utils/AxiosRequest";
import { LoadingToast } from "../utils/ToastMessage";
import { handleLogin } from "../utils/handleResponses";
import { LogOut } from "../utils/LogOut";
const LOGIN_PATH = "auth/google/login/";
const GOOGLE_INIT = "auth/google/init/";
const AUTHENTICATED_USER = "auth/profile/me/";

const AuthProvider = ({ children }) => {
  /**Toggle Password Visibility State */
  let id = null;
  const { updatePreloader } = useContext(UtilsContext);
  const [auth, AuthDispatch] = useReducer(AuthReducer, null);
  const [user, UserDispatch] = useReducer(AuthReducer, null);

  const logOutHandler = () => {
    LogOut();
    // AuthDispatch({
    //   type: dispatcherActions.LOGOUT,
    //   payload: null,
    // });
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

  useEffect(() => {
    if (!IGNORE_URL_PATHS.includes(window.location.pathname)) {
      authenticatedUser();
    }
  }, []);
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
    const res = await GetRequest(BaseUrlPath + GOOGLE_INIT);
    window.location.href = res.data.auth_url;
  };
  const data = {
    auth,
    user,
    logOutHandler,
    googleAuthLogin,
    googleAuthRegister,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
