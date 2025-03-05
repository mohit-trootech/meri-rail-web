import { FareContext } from "../context/Context";
import { useState } from "react";
import { BaseUrlPath, LoadingMessages } from "../utils/contants";
import { PostRequest } from "../utils/AxiosRequest";
import { LoadingToast } from "../utils/ToastMessage";
import { fareFetchedSuccess } from "../utils/handleResponses";

const FARE_URL = "api/fare/";

const FareProvider = ({ children }) => {
  let id = null;
  const [fare, setFare] = useState(null);
  const fetchFare = async (data) => {
    id = LoadingToast(LoadingMessages.FARE_LOADING);
    const res = await PostRequest(
      BaseUrlPath + FARE_URL,
      data,
      null,
      fareFetchedSuccess,
      id
    );
    res && setFare(res.data);
  };
  const data = { fare, fetchFare };
  return <FareContext.Provider value={data}>{children}</FareContext.Provider>;
};

export default FareProvider;
