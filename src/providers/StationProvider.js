import { StationContext } from "../context/Context";
import { useReducer } from "react";
import { GetRequest } from "../utils/AxiosRequest";
import { StationReducer } from "../reducers/StationReducer";
import { getBearerToken } from "../utils/utils";
import {
  LoadingMessages,
  dispatcherActions,
  BaseUrlPath,
  ResponseMessages,
} from "../utils/contants";
import { LoadingToast, SuccessToast } from "../utils/ToastMessage";
import { trainDetailsFetchedSuccess } from "../utils/handleResponses";

const FETCH_STATION_PATH = "api/stations/";

const StationProvider = ({ children }) => {
  let id = null;
  const [stations, StationsDispatch] = useReducer(StationReducer, null);
  const [station, StationDispatch] = useReducer(StationReducer, null);
  const fetchStations = async (query_params) => {
    const response = await GetRequest(
      BaseUrlPath + FETCH_STATION_PATH + `?${query_params || ""}`,
      getBearerToken
    );
    response &&
      StationsDispatch({
        type: dispatcherActions.SET_STATIONS,
        payload: response.data.results,
      });
  };
  const trainStationFetching = async (code) => {
    id = LoadingToast(LoadingMessages.FETCHING_TRAIN_DETAILS);
    const response = await GetRequest(
      BaseUrlPath + FETCH_STATION_PATH + code,
      getBearerToken,
      trainDetailsFetchedSuccess,
      id
    );
    response &&
      StationDispatch({
        type: dispatcherActions.SET_STATION,
        payload: response.data,
      });
  };
  const resetDetails = async () => {
    id = LoadingToast(LoadingMessages.RESETTING_TRAIN_DETAILS);
    StationDispatch({
      type: dispatcherActions.SET_STATION,
      payload: null,
    });
    SuccessToast(id, ResponseMessages.STATION_DETAILS_RESET);
  };

  const data = {
    stations,
    station,
    fetchStations,
    trainStationFetching,
    resetDetails,
  };
  return (
    <StationContext.Provider value={data}>{children}</StationContext.Provider>
  );
};

export default StationProvider;
