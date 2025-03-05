import SeatAvailability from "./SeatAvailability";
const TbisCard = ({ index, train, times }) => {
  return (
    <>
      <div className="collapse rounded-none">
        <input type="radio" name="tbis-collapse" defaultChecked={index === 0} />
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
              <div className="tooltip" data-tip={train.station_to.name_hi}>
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
        <SeatAvailability train={train} />
      </div>
    </>
  );
};

export default TbisCard;
