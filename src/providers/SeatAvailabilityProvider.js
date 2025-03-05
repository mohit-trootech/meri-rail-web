import { SeatAvailabilityContext } from "../context/Context";
import { useState } from "react";
import { BaseUrlPath, LoadingMessages } from "../utils/contants";
import { PostRequest } from "../utils/AxiosRequest";
import { LoadingToast } from "../utils/ToastMessage";
import { seatAvailabilityFetchedSuccess } from "../utils/handleResponses";
import { getBearerToken } from "../utils/utils";
const SEAT_AVAILABILITY_URL = "api/seat-availability/";

const SeatAvailabilityProvider = ({ children }) => {
  let id = null;
  const [seatAvailability, setSeatAvailability] = useState(null);
  const fetchSeatAvailability = async (data) => {
    id = LoadingToast(LoadingMessages.SEAT_AVAILABILITY_LOADING);
    const res = await PostRequest(
      BaseUrlPath + SEAT_AVAILABILITY_URL,
      data,
      getBearerToken,
      seatAvailabilityFetchedSuccess,
      id
    );
    res && setSeatAvailability(res.data);
  };
  const data = { seatAvailability, setSeatAvailability, fetchSeatAvailability };
  return (
    <SeatAvailabilityContext.Provider value={data}>
      {children}
    </SeatAvailabilityContext.Provider>
  );
};

export default SeatAvailabilityProvider;
