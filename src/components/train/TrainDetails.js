import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import TrainRoute from "./TrainRoute";
import TrainRouteTimeline from "./TrainRouteTimeline";

const TrainDetails = ({ train }) => {
  const CURSOR_HELP_BADGE_SUCCESS = "cursor-help badge badge-success";
  const CURSOT_HELP_BADGE_ERROR = "cursor-help badge badge-error";

  return (
    <div className="flex flex-col justify-center items-start gap-3 border p-3 rounded-lg shadow-xl border-gray-600">
      {/* Train Details and Schedule */}
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row justify-start items-center gap-2">
          <h1 className="text-2xl font-bold">{train.train.name}</h1>
          <button className="btn btn-sm cursor-help badge badge-primary">
            {train.train.number}
          </button>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <p
            className={
              train.train.schedule.monday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            M
          </p>
          <p
            className={
              train.train.schedule.tuesday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            T
          </p>
          <p
            className={
              train.train.schedule.wednesday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            W
          </p>
          <p
            className={
              train.train.schedule.thursday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            T
          </p>
          <p
            className={
              train.train.schedule.friday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            F
          </p>
          <p
            className={
              train.train.schedule.saturday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            S
          </p>
          <p
            className={
              train.train.schedule.sunday === "Y"
                ? CURSOR_HELP_BADGE_SUCCESS
                : CURSOT_HELP_BADGE_ERROR
            }
          >
            S
          </p>
        </div>
      </div>
      <div className="divider"></div>
      {/* Train Source Destination Details */}
      <div className="grid grid-cols-3 gap-3 w-full">
        {/* Train From Details */}
        <div className="flex flex-col justify-center items-start gap-5">
          <div className="flex flex-row justify-start items-end gap-3">
            <h1 className="text-xl font-bold">{train.station_from.name}</h1>
            <div className="divider divider-horizontal m-0"></div>
            <p>{train.station_from.name_hi}</p>
          </div>
          <table className="table border border-gray-500 w-full">
            <tbody>
              <tr className="hover">
                <td>Code</td>
                <td>{train.station_from.code}</td>
              </tr>
              <tr className="hover">
                <td>Latitude</td>
                <td>{train.station_from.latitude}</td>
              </tr>
              <tr className="hover">
                <td>Longitude</td>
                <td>{train.station_from.longitude}</td>
              </tr>
              <tr className="hover">
                <td>Address</td>
                <td>{train.station_from.address}</td>
              </tr>
              <tr className="hover">
                <td>District</td>
                <td>
                  {train.station_from.district &&
                    train.station_from.district.name}
                </td>
              </tr>
              <tr className="hover">
                <td>State</td>
                <td>
                  {train.station_from.state && train.station_from.state.name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="justify-self-end self-center btn btn-xs btn-primary">
              {train.station_from.code}
            </div>
            <div className="justify-self-center btn btn-xs btn-warning animate-[tofro_1s_ease-in-out_infinite]">
              <FaArrowRightArrowLeft />
            </div>
            <div className="justify-self-start self-center btn btn-xs btn-primary">
              {train.station_to.code}
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <button
              className="w-full btn btn-sm btn-primary"
              onClick={() =>
                document.getElementById("train_route_map").showModal()
              }
            >
              Train Route Map
            </button>
            <TrainRoute route={train.train.route} />
          </div>
        </div>
        {/* Train To Details */}
        <div className="flex flex-col justify-center items-start gap-5">
          <div className="flex flex-row justify-start items-end gap-3">
            <h1 className="text-xl font-bold">{train.station_to.name}</h1>
            <div className="divider divider-horizontal m-0"></div>
            <p>{train.station_to.name_hi}</p>
          </div>
          <table className="table border border-gray-500 w-full">
            <tbody>
              <tr className="hover">
                <td>Code</td>
                <td>{train.station_to.code}</td>
              </tr>
              <tr className="hover">
                <td>Latitude</td>
                <td>{train.station_to.latitude}</td>
              </tr>
              <tr className="hover">
                <td>Longitude</td>
                <td>{train.station_to.longitude}</td>
              </tr>
              <tr className="hover">
                <td>Address</td>
                <td>{train.station_to.address}</td>
              </tr>
              <tr className="hover">
                <td>District</td>
                <td>
                  {train.station_to.district && train.station_to.district.name}
                </td>
              </tr>
              <tr className="hover">
                <td>State</td>
                <td>{train.station_to.state && train.station_to.state.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="divider"></div>
      {/* Train Route */}
      <div className="h-screen overflow-auto">
        <ul className="w-full ml-5">
          {train.train.route.map((route, key) => (
            <TrainRouteTimeline key={key} route={route} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainDetails;
