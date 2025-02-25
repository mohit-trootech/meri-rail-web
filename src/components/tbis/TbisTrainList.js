import React from "react";

const TbisTrainList = ({ tbis, handleSubmit, handleChange }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-5 border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-xl duration-300 transition p-5 rounded-xl bg-base-300">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-row items-center justify-between gap-2 w-full"
        >
          <input
            type="text"
            onChange={handleChange}
            name="from_station"
            placeholder="From Station"
            defaultValue={tbis.from_station}
            list="stations-datalist"
            className="input input-bordered w-full input-primary input-xs"
          />
          <input
            type="text"
            onChange={handleChange}
            name="to_station"
            placeholder="To Station"
            defaultValue={tbis.to_station}
            list="stations-datalist"
            className="input input-bordered w-full input-primary input-xs"
          />
          <input
            name="dt"
            type="date"
            placeholder="Date of Travel"
            defaultValue={tbis.dt}
            className="input input-bordered w-full input-primary input-xs"
          />
          <button
            type="submit"
            name="from_station"
            className="btn btn-primary btn-xs"
          >
            Update Details
          </button>
        </form>
        {(tbis.trains && tbis.trains.length && (
          <div className="flex flex-col items-start justify-center gap-5 w-full">
            {tbis.trains.map((train, index) => {
              const times = tbis.arrival_departure_times.find(
                (obj) => obj.train === train.train.number
              );
              return (
                <>
                  <div key={index} className="collapse rounded-none">
                    <input
                      type="radio"
                      name="tbis-collapse"
                      defaultChecked={index === 0}
                    />
                    <div className="collapse-title flex flex-row items-center justify-between gap-3 w-full border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl duration-300 transition p-3 rounded-xl bg-base-200">
                      <div className="flex flex-row items-center justify-between gap-3 w-full">
                        <div className="flex flex-col items-start justify-center gap-1">
                          <p className="text-xl font-bold">
                            {train.train.name} | {train.train.number}
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-around gap-1">
                          <div
                            className="tooltip flex flex-row items-center justify-around gap-1"
                            data-tip={train.station_from.name_hi}
                          >
                            <div className="btn bg-gray-900 text-white btn-sm">
                              {train.station_from.name}
                              <span className="badge badge-warning badge-xs">
                                {train.station_from.code}
                              </span>
                            </div>
                            <div className="flex flex-row items-center justify-around gap-1">
                              <div className="btn btn-xs btn-success">
                                {times.arrival || "SRC"}
                              </div>
                              <div className="btn btn-xs btn-error">
                                {times.departure || "DEST"}
                              </div>
                            </div>
                          </div>
                          |
                          <div
                            className="tooltip"
                            data-tip={train.station_to.name_hi}
                          >
                            <div className="btn bg-gray-900 text-white btn-sm">
                              {train.station_to.name}
                              <span className="badge badge-warning badge-xs">
                                {train.station_to.code}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="collapse-content p-3 ">
                      Click the "Sign Up" button in the top right corner and
                      follow the registration process.
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )) || <div className="text-xl">No Trains Found</div>}
      </div>
    </>
  );
};

export default TbisTrainList;
