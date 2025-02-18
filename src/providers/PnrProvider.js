import { PnrContext } from "../context/Context";
import { useEffect, useReducer } from "react";
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
  const [pnr, PnrDispatch] = useReducer(PnrReducer, null);

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
  useEffect(() => {
    PnrDispatch({
      type: dispatcherActions.SET_PNR,
      payload: {
        pnr: 2926114299,
        date_of_journey: "2025-02-15",
        train: {
          number: "22435",
          name: "VANDE BHARAT EX",
        },
        source: {
          name: "PRAYAGRAJ JN.",
          code: "PRYJ",
          name_hi: "प्रयागराज जन.",
          district: null,
          state: null,
          latitude: "25.451013816413738",
          longitude: "81.82636135958182",
          address: "Civil Lines, Prayagraj, Uttar Pradesh 211001",
          trains_count: null,
          utterances: [],
        },
        destination: {
          name: "NEW DELHI",
          code: "NDLS",
          name_hi: "नई दिल्ली",
          district: {
            name: "Central",
            name_ascii: "Central",
            geoname_id: null,
            latitude: null,
            longitude: null,
            population: null,
            feature_code: null,
            timezone: null,
          },
          state: {
            name: "Delhi",
            name_ascii: "Delhi",
            geoname_id: 1273293,
            country: {
              name: "India",
              name_ascii: "India",
              geoname_id: 1269750,
              code2: "IN",
            },
          },
          latitude: "28.642314",
          longitude: "77.22000399999999",
          address:
            "Pedestrian Opas, Ratan Lal Market, Railway Colony, Paharganj, New Delhi, Delhi 110006",
          trains_count: null,
          utterances: [],
        },
        boarding: {
          name: "NEW DELHI",
          code: "NDLS",
          name_hi: "नई दिल्ली",
          district: {
            name: "Central",
            name_ascii: "Central",
            geoname_id: null,
            latitude: null,
            longitude: null,
            population: null,
            feature_code: null,
            timezone: null,
          },
          state: {
            name: "Delhi",
            name_ascii: "Delhi",
            geoname_id: 1273293,
            country: {
              name: "India",
              name_ascii: "India",
              geoname_id: 1269750,
              code2: "IN",
            },
          },
          latitude: "28.642314",
          longitude: "77.22000399999999",
          address:
            "Pedestrian Opas, Ratan Lal Market, Railway Colony, Paharganj, New Delhi, Delhi 110006",
          trains_count: null,
          utterances: [],
        },
        journey_class: "CC",
        number_of_passengers: 3,
        chart_status: "Chart Prepared",
        cancel_status: null,
        booking_fare: 5475,
        ticket_fare: null,
        quota: "TQ",
        vikalp_otp: "Yes",
        booking_date: "2025-02-14",
        mobile_number: null,
        distance: 636,
        passengers: [
          {
            serial_number: 1,
            quota: "TQ",
            nationality: "IN",
            waitlist_type: null,
            booking_status: "TQWL",
            booking_coach: null,
            booking_berth: "109",
            booking_details: "TQWL/109",
            current_status: "CAN",
            current_coach: null,
            current_berth: null,
            current_details: "CAN",
          },
          {
            serial_number: 2,
            quota: "TQ",
            nationality: "IN",
            waitlist_type: null,
            booking_status: "TQWL",
            booking_coach: null,
            booking_berth: "110",
            booking_details: "TQWL/110",
            current_status: "CAN",
            current_coach: null,
            current_berth: null,
            current_details: "CAN",
          },
          {
            serial_number: 3,
            quota: "TQ",
            nationality: "IN",
            waitlist_type: null,
            booking_status: "TQWL",
            booking_coach: null,
            booking_berth: "111",
            booking_details: "TQWL/111",
            current_status: "CAN",
            current_coach: null,
            current_berth: null,
            current_details: "CAN",
          },
        ],
      },
    });
  }, []);

  const data = { pnr, fetchPnrStatus };
  return <PnrContext.Provider value={data}>{children}</PnrContext.Provider>;
};

export default PnrProvider;
