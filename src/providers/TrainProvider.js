import { TrainContext } from "../context/Context";
import { useContext, useReducer } from "react";
import { GetRequest } from "../utils/AxiosRequest";
import { TrainReducer } from "../reducers/TrainReducers";
import { getBearerToken } from "../utils/utils";
import { UtilsContext } from "../context/Context";
import {
  LoadingMessages,
  dispatcherActions,
  BaseUrlPath,
} from "../utils/contants";
import { LoadingToast } from "../utils/ToastMessage";
import {
  trainDetailsFetchedSuccess,
  TrainDetailsResetSuccess,
} from "../utils/handleResponses";

const FETCH_TRAIN_PATH = "api/trains/";

const TrainProvider = ({ children }) => {
  let id = null;
  const { setPrevious, setNext } = useContext(UtilsContext);
  const [trains, TrainsDispatch] = useReducer(TrainReducer, null);
  const [train, TrainDispatch] = useReducer(TrainReducer, null);
  const fetchTrains = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + FETCH_TRAIN_PATH + `?${query_params || ""}`,
      getBearerToken
    );
    response && response.data.next && setNext(response.data.next);
    response && response.data.previous && setPrevious(response.data.previous);
    response &&
      TrainsDispatch({
        type: dispatcherActions.SET_TRAINS,
        payload: response.data.results,
      });
  };
  const trainDetailsFetching = async (number) => {
    id = LoadingToast(LoadingMessages.FETCHING_TRAIN_DETAILS);
    const response = await GetRequest(
      BaseUrlPath + FETCH_TRAIN_PATH + number,
      getBearerToken,
      trainDetailsFetchedSuccess,
      id
    );
    response &&
      TrainDispatch({
        type: dispatcherActions.SET_TRAIN,
        payload: response.data,
      });
  };
  const resetDetails = async () => {
    id = LoadingToast(LoadingMessages.RESETTING_TRAIN_DETAILS);
    TrainDispatch({
      type: dispatcherActions.SET_TRAIN,
      payload: null,
    });
    TrainDetailsResetSuccess(id);
  };

  const data = {
    trains,
    train,
    fetchTrains,
    trainDetailsFetching,
    resetDetails,
  };
  return <TrainContext.Provider value={data}>{children}</TrainContext.Provider>;
};

export default TrainProvider;
