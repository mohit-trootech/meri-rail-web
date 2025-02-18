import { TrainContext } from "../context/Context";
import { useEffect, useReducer } from "react";
import { GetRequest } from "../utils/AxiosRequest";
import { TrainReducer } from "../reducers/TrainReducers";
import { getBearerToken } from "../utils/utils";
import {
  ResponseMessages,
  LoadingMessages,
  dispatcherActions,
  BaseUrlPath,
} from "../utils/contants";

const FETCH_TRAIN_PATH = "/api/trains/";

const TrainProvider = ({ children }) => {
  const [trains, TrainsDispatch] = useReducer(TrainReducer, null);
  const [train, TrainDispatch] = useReducer(TrainReducer, null);
  const fetchTrains = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + FETCH_TRAIN_PATH + `?${query_params || ""}`,
      getBearerToken
    );
    response &&
      TrainsDispatch({
        type: dispatcherActions.SET_TRAINS,
        payload: response.data.results,
      });
  };
  const data = { trains, train, fetchTrains };
  return <TrainContext.Provider value={data}>{children}</TrainContext.Provider>;
};

export default TrainProvider;
