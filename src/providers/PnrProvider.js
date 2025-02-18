import { PnrContext } from "../context/Context";
import { useReducer } from "react";
import { PostRequest } from "../utils/AxiosRequest";
import { PnrReducer } from "../reducers/PnrReducers";
import {
  BaseUrlPath,
  dispatcherActions,
  LoadingMessages,
} from "../utils/contants";
import { getBearerToken } from "../utils/utils";
import { LoadingToast } from "../utils/ToastMessage";
import { PnrDetailsFetchedSuccess } from "../utils/handleResponses";

const FETCH_API = "api/pnr/";

const PnrProvider = ({ children }) => {
  let id = null;
  const [pnr, PnrDispatch] = useReducer(PnrReducer, { pnr: null });

  const fetchPnrStatus = async (data) => {
    id = LoadingToast(LoadingMessages.FETCHING_PNR);
    const response = await PostRequest(
      BaseUrlPath + FETCH_API,
      data,
      getBearerToken,
      PnrDetailsFetchedSuccess,
      id
    );
    response &&
      PnrDispatch({ type: dispatcherActions.SET_PNR, payload: response.data });
  };

  const data = { pnr, fetchPnrStatus };
  return <PnrContext.Provider value={data}>{children}</PnrContext.Provider>;
};

export default PnrProvider;
