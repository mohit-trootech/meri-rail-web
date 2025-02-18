import React from "react";
import PassengerDrawer from "./PassengerDrawer";

const PassengerDetails = ({ passenger, updatePassDrawer, passDrawer }) => {
  return (
    <>
      <tr key={passenger.serial_number}>
        <td rowSpan={2}>
          <div className="flex justify-between">
            <span>Passenger {passenger.serial_number}</span>
            <span>
              <PassengerDrawer
                id={passenger.serial_number}
                passDrawer={passDrawer}
                updatePassDrawer={updatePassDrawer}
              />
            </span>
          </div>
        </td>
        <td
          className={
            passenger.booking_status === "CNF"
              ? "bg-success text-gray-900"
              : "bg-yellow-400 text-gray-900"
          }
        >
          {passenger.booking_status}/{passenger.booking_coach}/
          {passenger.booking_berth}
        </td>
      </tr>
      <tr className="hover">
        <td
          className={
            passenger.booking_status === "CNF"
              ? "bg-success text-gray-900"
              : "bg-yellow-400 text-gray-900"
          }
        >
          {passenger.booking_status}/{passenger.booking_coach}/
          {passenger.booking_berth}
        </td>
      </tr>
    </>
  );
};

export default PassengerDetails;
