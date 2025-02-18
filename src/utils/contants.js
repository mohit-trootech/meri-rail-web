/**Constants */

/**Daisy UI Themes */
export const themes = ["light", "dark", "lofi", "black", "night"];

export const IGNORE_URL_PATHS = [
  "/login",
  "/login/",
  "/verify-account",
  "/verify-account/",
  "/forgot-password",
  "/forgot-password/",
  "/register",
  "/register/",
  "/organization/accounts",
  "/organization/accounts/",
  "/unauthorized",
  "/unauthorized/",
];

export const BaseUrlPath = "http://127.0.0.1:8000/";
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
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTER: "REGISTER",
  SET_PNR: "SET_PNR",
  SET_TRAINS: "SET_TRAINS",
  SET_TRAIN: "SET_TRAIN",
};

export const LoadingMessages = {
  LOGIN: "Logging In...",
  LOGOUT: "Logging Out...",
  REGISTER: "Registering User...",
  FORGOT_PASSWORD: "Sending Password Reset Link...",
  PASSWORD_CHANGED: "Changing Password...",
  FETCHING_PNR: "Fetching PNR Status...",
};

export const ResponseMessages = {
  PNR_FETCHED: "PNR Details Fetched Successfully",
  LOGIN_SUCCESS: "Login Successful",
  LOGOUT_SUCCESS: "Logged Out Successfully",
  REGISTER_SUCCESS: "Registered Successfully",
  FORGOT_PASSWORD_SUCCESS: "Password Reset Link Sent Successfully",
  PASSWORD_CHANGED_SUCCESS: "Password Changed Successfully",
};
