import React from "react";
import { TbBuilding } from "react-icons/tb";

const TrainRouteTimeline = ({ route }) => {
  return (
    <>
      <li className="border-l-2 border-purple-600">
        <div className="md:flex flex-start">
          <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
            <TbBuilding className="w-3 h-3 text-white" />
          </div>
          <div className="flex flex-col justify-center items-start gap-3 mb-10 ml-3">
            <button className="btn btn-sm">
              {route.station.name}
              <span className="badge badge-xs badge-primary">
                {route.station.code}
              </span>
            </button>
            <table className="border rounded-xl border-gray-700 table table-zebra overflow-auto">
              <tbody>
                <tr>
                  <th>Arrival</th>
                  <td>{route.arrival ? route.arrival : "Source"}</td>
                </tr>
                <tr>
                  <th>Departure</th>
                  <td>{route.departure ? route.departure : "Destination"}</td>
                </tr>
                <tr>
                  <th>Platform</th>
                  <td>{route.platform}</td>
                </tr>
                <tr>
                  <th>Halt</th>
                  <td>
                    {route.halt === "src"
                      ? "Source"
                      : route.halt === "dest"
                      ? "Destination"
                      : route.halt}
                  </td>
                </tr>
                <tr>
                  <th>Day</th>
                  <td>{route.day_count}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
    </>
  );
};

export default TrainRouteTimeline;
