/**Constants */

/**Daisy UI Themes */
export const themes = ["light", "dark", "lofi", "black", "night"];

export const IGNORE_URL_PATHS = ["/auth/", "/auth"];

export const BaseUrlPath = "https://d872-103-24-180-44.ngrok-free.app/";
export const urlLogin = "http://127.0.0.1:8000/api/login/";
export const urlForgotPassword =
  "http://127.0.0.1:8000/accounts/forgot-password/";
export const urlForgotPasswordOtpSubmit =
  "http://127.0.0.1:8000/accounts/otp-verification/";

export const MANAGER = "manager";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const userDetailsGoogle = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=`;

export const dispatcherActions = {
  ME: "ME",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  SET_PNR: "SET_PNR",
  SET_TRAINS: "SET_TRAINS",
  SET_TRAIN: "SET_TRAIN",
  SET_STATIONS: "SET_STATIONS",
  SET_STATION: "SET_STATION",
  SET_TBIS: "SET_TBIS",
  RESET_DETAILS: "RESET_DETAILS",
};

export const LoadingMessages = {
  LOGIN: "Logging In...",
  LOGOUT: "Logging Out...",
  REGISTER: "Registering User...",
  FORGOT_PASSWORD: "Sending Password Reset Link...",
  PASSWORD_CHANGED: "Changing Password...",
  FETCHING_PNR: "Fetching PNR Status...",
  FETCHING_TRAIN_DETAILS: "Fetching Train Details...",
  RESETTING_TRAIN_DETAILS: "Resetting Train Details...",
  TBIS_LOADING: "Fetching Available Trains...",
  FETCHING_STATION_DETAILS: "Fetching Station Details...",
  RESETTING_STATION_DETAILS: "Resetting Station Details...",
  RESETTING_TBIS: "Resetting Available Trains...",
};

export const ResponseMessages = {
  PNR_FETCHED: "PNR Details Fetched Successfully",
  LOGIN_SUCCESS: "Login Successful",
  LOGOUT_SUCCESS: "Logged Out Successfully",
  REGISTER_SUCCESS: "Registered Successfully",
  FORGOT_PASSWORD_SUCCESS: "Password Reset Link Sent Successfully",
  PASSWORD_CHANGED_SUCCESS: "Password Changed Successfully",
  TRAIN_DETAILS_FETCHED: "Train Details Fetched Successfully",
  TRAIN_DETAILS_RESET: "Train Details Reset Successfully",
  STATIONS_FETCHED: "Stations Fetched Successfully",
  TBIS_FETCHED: "Available Train Details",
  TBIS_RESET: "Available Trains Reset Successfully",
  STATION_DETAILS_RESET: "Station Details Reset Successfully",
};
