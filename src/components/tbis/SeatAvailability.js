import React from "react";
import Availabilities from "./Availabilities";
import SeatAvailabilityForm from "./SeatAvailabilityForm";
const SeatAvailability = ({ train }) => {
  return (
    <div className="collapse-content">
      <div className="flex flex-col items-start justify-center gap-5 w-full bg-base-100 rounded-b-lg p-5 border border-t-0">
        <div className="grid grid-cols-2 items-start justify-center gap-3 w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Seat Availability</h1>
            <SeatAvailabilityForm train={train} />
          </div>
          <Availabilities train={train} />
        </div>
      </div>
    </div>
  );
};

export default SeatAvailability;
