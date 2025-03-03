import { TbisContext } from "../context/Context";
import { useReducer } from "react";
import { TbisReducer } from "../reducers/TbisReducer";
import {
  BaseUrlPath,
  dispatcherActions,
  LoadingMessages,
  ResponseMessages,
} from "../utils/contants";
import { tbisFetchedSuccess } from "../utils/handleResponses";
import { PostRequest } from "../utils/AxiosRequest";
import { LoadingToast, SuccessToast } from "../utils/ToastMessage";

const TBIS_URL = "api/tbis/";

const TbisProvider = ({ children }) => {
  let id = null;
  const [tbis, TbisDispatch] = useReducer(TbisReducer, null);
  const resetDetails = () => {
    id = LoadingToast(LoadingMessages.RESETTING_TBIS);
    TbisDispatch({
      type: dispatcherActions.RESET_DETAILS,
    });
    SuccessToast(id, ResponseMessages.TBIS_RESET);
  };
  const fetchTbisData = async (data) => {
    id = LoadingToast(LoadingMessages.TBIS_LOADING);
    const res = await PostRequest(
      BaseUrlPath + TBIS_URL,
      data,
      null,
      tbisFetchedSuccess,
      id
    );
    res &&
      TbisDispatch({
        type: dispatcherActions.SET_TBIS,
        payload: res.data,
      });
  };
  const data = { tbis, fetchTbisData, resetDetails };
  return <TbisContext.Provider value={data}>{children}</TbisContext.Provider>;
};

export default TbisProvider;
