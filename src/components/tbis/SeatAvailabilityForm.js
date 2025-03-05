import { useContext } from "react";
import {
  SeatAvailabilityContext,
  UtilsContext,
  TbisContext,
} from "../../context/Context";

const SeatAvailabilityForm = ({ train }) => {
  const { tbis } = useContext(TbisContext);
  const { quota, journeyClass } = useContext(UtilsContext);
  const { fetchSeatAvailability } = useContext(SeatAvailabilityContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSeatAvailability({
      train: train.train.number,
      from_station: tbis.from_station,
      to_station: tbis.to_station,
      dt: tbis.dt,
      quota: e.target.quota.value,
      train_cls: e.target.train_cls.value,
    });
  };

  return (
    <div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <select
          name="quota"
          defaultValue={"GN"}
          className="select select-bordered select-sm w-full"
        >
          {(quota &&
            quota.map((item, index) => (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            ))) || <option>Loading...</option>}
        </select>
        <select
          name="train_cls"
          defaultValue={"SL"}
          className="select select-bordered select-sm w-full"
        >
          {(journeyClass &&
            journeyClass.map((item, index) => (
              <option key={index} value={item.code}>
                {item.name}
              </option>
            ))) || <option>Loading...</option>}
        </select>
        <button type="submit" className="btn btn-sm btn-primary">
          Search Availability
        </button>
      </form>
    </div>
  );
};

export default SeatAvailabilityForm;
