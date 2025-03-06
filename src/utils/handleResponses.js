/**Handle Responses */
import { updateLocalStorage } from "../utils/utils";
import { SuccessToast } from "../utils/ToastMessage";
import { ResponseMessages } from "./contants";
/**Handle Accounts App Responses */
export const handleLogin = (response, id) => {
  /**Handle login Response */
  updateLocalStorage("access", response.access);
  updateLocalStorage("refresh", response.refresh);
  SuccessToast(id, ResponseMessages.LOGIN_SUCCESS, "/");
};
export const profileUpdateSuccess = (response, id) => {
  /**Handle Profile Update Response */
  SuccessToast(id, ResponseMessages.PROFILE_UPDATE_SUCCESS);
};
export const handleRegister = (response, id) => {
  /**Handle Register Response */
  SuccessToast(id, ResponseMessages.REGISTER_SUCCESS, "/auth/login/");
};
export const handleForgotPassword = (response, id) => {
  /**Handle Forgot Password Response */
  SuccessToast(id, response.message, "/login");
};

export const PnrDetailsFetchedSuccess = (response, id) => {
  /**Handle PNR Details Fetched Response */
  SuccessToast(id, ResponseMessages.PNR_FETCHED);
};

export const PnrDetailsResetSuccess = (id) => {
  /**Handle PNR Details Reset Response */
  SuccessToast(id, ResponseMessages.PNR_RESET);
};
export const trainDetailsFetchedSuccess = (response, id) => {
  /**Handle Train Details Fetched Response */
  SuccessToast(id, ResponseMessages.TRAIN_DETAILS_FETCHED);
};
export const TrainDetailsResetSuccess = (id) => {
  /**Handle Train Details Reset Response */
  SuccessToast(id, ResponseMessages.TRAIN_DETAILS_RESET);
};

export const tbisFetchedSuccess = (response, id) => {
  /**Handle TBIS Fetched Response */
  SuccessToast(id, ResponseMessages.TBIS_FETCHED);
};

export const seatAvailabilityFetchedSuccess = (response, id) => {
  /**Handle Seat Availability Fetched Response */
  SuccessToast(id, ResponseMessages.SEAT_AVAILABILITY_FETCHED);
};

export const fareFetchedSuccess = (response, id) => {
  /**Handle Fare Details Fetched Response */
  SuccessToast(id, ResponseMessages.FARE_DETAILS_FETCHED);
};
