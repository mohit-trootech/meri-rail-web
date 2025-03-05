import { useState } from "react";
import bgGif from "../../static/img/blue-sky-train.gif";
import { FaCalendar, FaTrain } from "react-icons/fa6";
import PassengerDetails from "./PassengerDetails";
import StationDetails from "./StationDetails";
const PnrDetails = ({ pnr, handleSubmit, resetPnrDetails }) => {
  const [passDrawer, setPassDrawer] = useState(null);
  const updatePassDrawer = (id) => {
    setPassDrawer(
      pnr.passengers.filter((passenger) => passenger.serial_number === id)[0]
    );
  };
  return (
    <div
      className="hero min-h-full"
      style={{
        backgroundImage: `url(${bgGif})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content bg-gray-900 shadow-2xl rounded-lg w-8/12 my-10">
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold">PNR: {pnr.pnr}</h1>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="btn btn-sm btn-primary"
                onClick={resetPnrDetails}
              >
                Reset Details
              </button>
              <form method="POST" onSubmit={handleSubmit}>
                <input name="pnr" value={pnr.pnr} type="hidden" />
                <button className="btn btn-sm btn-primary">
                  Update Details
                </button>
              </form>
            </div>
          </div>
          <ul className="menu rounded-box w-full lg:menu-horizontal rounded-box justify-start">
            <li>
              <p>
                <FaTrain />
                {pnr.train.name}

                <span className="badge badge-primary badge-sm">
                  {pnr.train.number}
                </span>
              </p>
            </li>
            <li>
              <p>
                <FaCalendar />
                {pnr.date_of_journey}
              </p>
            </li>
          </ul>
          <table className="table border border-gray-700 rounded-xl shadow-xl overflow-auto">
            <tbody>
              <tr className="hover">
                <th>Journey Class</th>
                <td>{pnr.journey_class}</td>
              </tr>
              <tr className="hover">
                <th>Quota</th>
                <td>{pnr.quota}</td>
              </tr>
              <tr className="hover">
                <th>Booking Date</th>
                <td>{pnr.booking_date}</td>
              </tr>
              <tr className="hover">
                <th>Booking Fare</th>
                <td>&#8377; {pnr.booking_fare}</td>
              </tr>
              <tr className="hover">
                <th>Ticket Fare</th>
                <td>&#8377; {pnr.ticket_fare}</td>
              </tr>
              <tr className="hover">
                <th>Vikal Opted</th>
                <td>{pnr.vikalp_otp}</td>
              </tr>
              <tr className="hover">
                <th>Chart Status</th>
                <td>{pnr.chart_status}</td>
              </tr>
              <tr className="hover">
                <th>Cancel Status</th>
                <td>{pnr.cancel_status}</td>
              </tr>
              <tr className="text-left text-2xl">
                <th colSpan={2}>
                  <div className="flex justify-between">
                    <div>Station Details</div>
                    <div>
                      <StationDetails pnr={pnr} />
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          document
                            .getElementById("pnr_station_detail_modal")
                            .showModal()
                        }
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
              <tr>
                <th>From Station</th>
                <td>
                  {pnr.source.name} ({pnr.source.code})
                </td>
              </tr>
              <tr>
                <th>To Station</th>
                <td>
                  {pnr.destination.name} ({pnr.destination.code})
                </td>
              </tr>
              <tr>
                <th>Boarding Station</th>
                <td>
                  {pnr.boarding.name} ({pnr.boarding.code})
                </td>
              </tr>
              <tr className="text-left text-2xl">
                <th>Passenger Details</th>
                <td>{pnr.number_of_passengers}</td>
              </tr>
              {pnr.passengers.map((passenger) => (
                <PassengerDetails
                  key={passenger.serial_number}
                  passenger={passenger}
                  updatePassDrawer={updatePassDrawer}
                  passDrawer={passDrawer}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PnrDetails;
