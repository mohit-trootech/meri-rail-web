import { useContext, useEffect, useState } from "react";
import { SeatAvailabilityContext } from "../../context/Context";

const Availabilities = ({ train }) => {
  const { seatAvailability } = useContext(SeatAvailabilityContext);
  const [dateAvailability, setDateAvailability] = useState(null);

  useEffect(() => {
    seatAvailability && setDateAvailability(seatAvailability[0]);
  }, [seatAvailability]);
  const handleChange = (e) => {
    e.preventDefault();
    const selectedDate = e.target.value;
    const selectedAvailability = seatAvailability.find(
      (item) => item.dt === selectedDate
    );
    setDateAvailability(selectedAvailability);
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start">
        {(seatAvailability &&
          dateAvailability &&
          train.train.number === dateAvailability.train.number && (
            <div className="flex flex-row md:flex-col items-start justify-start gap-3 w-full">
              <div className="flex flex-row justify-end w-full">
                <select
                  onChange={handleChange}
                  className="select select-sm select-bordered select-info"
                >
                  {seatAvailability.map((item) => (
                    <option value={item.dt} key={item.dt}>
                      {item.dt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="p-4 w-full border bg-base-300 rounded-box">
                <table className="table-zebra w-full">
                  <tbody className="text-left">
                    <tr>
                      <th>Train</th>
                      <td className="flex gap-2 items-center">
                        {dateAvailability.train.name}
                        <span className="badge badge-xs badge-info">
                          {dateAvailability.train.number}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>Quota</th>
                      <td>{dateAvailability.quota}</td>
                    </tr>

                    <tr>
                      <th>Class</th>
                      <td>{dateAvailability.train_cls}</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td className="bg-info text-white text-center">
                        {dateAvailability.available}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )) || (
          <div role="alert" className="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info h-6 w-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Search for Availabilities.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Availabilities;
