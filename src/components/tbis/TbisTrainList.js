import React from "react";
import TbisCard from "./TbisCard";
const TbisTrainList = ({ tbis, handleSubmit, handleChange }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-center gap-5 border border-gray-800 hover:border-gray-700 shadow-lg hover:shadow-xl duration-300 transition p-5 rounded-xl bg-base-300">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-end md:items-center justify-between gap-2 w-full"
        >
          <input
            type="text"
            onChange={handleChange}
            name="from_station"
            placeholder="From Station"
            defaultValue={tbis.from_station}
            list="stations-datalist"
            className="input input-bordered w-full input-primary input-sm uppercase"
          />
          <input
            type="text"
            onChange={handleChange}
            name="to_station"
            placeholder="To Station"
            defaultValue={tbis.to_station}
            list="stations-datalist"
            className="input input-bordered w-full input-primary input-sm uppercase"
          />
          <input
            name="dt"
            required={true}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            max={
              new Date(new Date().setMonth(new Date().getMonth() + 4))
                .toISOString()
                .split("T")[0]
            }
            placeholder="Date of Travel"
            defaultValue={tbis.dt}
            className="input input-bordered w-full input-primary input-sm "
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
                <TbisCard
                  key={index}
                  index={index}
                  train={train}
                  times={times}
                />
              );
            })}
          </div>
        )) || <div className="text-xl">No Trains Found</div>}
      </div>
    </>
  );
};

export default TbisTrainList;
