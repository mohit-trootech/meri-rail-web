import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const StationDetails = ({ station }) => {
  return (
    <>
      <div className="card bordered shadow-lg w-full bg-base-300 text-base-content mt-4 p-4 rounded-lg hover:shadow-xl flex flex-col justify-center items-start gap-5">
        <div className="font-bold text-2xl flex flex-row items-center justify-between w-full">
          <p className="flex flex-row items-center">
            <span>{station.name}</span>
            <span className="divider divider-horizontal"></span>
            <span>{station.name_hi}</span>
            <span className="divider divider-horizontal"></span>
            <span className="badge rounded-xl badge-primary text-primary-content">
              {station.code}
            </span>
          </p>
          <div className="tooltip tooltip-left" data-tip="View on Google Maps">
            <a
              href={
                "https://www.google.com/maps/place/" +
                station.latitude +
                "," +
                station.longitude
              }
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-info rounded-full text-primary-content"
            >
              <FaMapMarkedAlt />
            </a>
          </div>
        </div>
        <p>
          <span className="font-bold">City:</span>{" "}
          {station.district && station.district.name_ascii}
        </p>
        <p>
          <span className="font-bold">State:</span>{" "}
          {station.state && station.state.name_ascii}, India
        </p>
        <p>
          <span className="font-bold">Latitude:</span>
          {station.latitude}
        </p>
        <p>
          <span className="font-bold">Longitude:</span>
          {station.longitude}
        </p>
        <p>
          <span className="font-bold">Address:</span> {station.address}
        </p>
        <p>
          <span className="font-bold">Trains Count:</span>
          {station.trains_count}
        </p>
      </div>
    </>
  );
};

export default StationDetails;
