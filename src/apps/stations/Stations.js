/* eslint-disable */
import { useContext, useEffect } from "react";
import { StationContext, UtilsContext } from "../../context/Context";
import Sidebar from "../../components/Sidebar";
import { FaHouseChimney, FaBuilding } from "react-icons/fa6";
import { Link } from "react-router-dom";
import StationDatalist from "../../components/stations/StationDatalist";
import StationList from "../../components/stations/StationList";
import StationDetails from "../../components/stations/StationDetails";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";
import NavBarMobile from "../../components/NavBarMobile";
const Stations = () => {
  const { preload } = useContext(UtilsContext);
  const {
    stations,
    station,
    fetchStations,
    stationDetailsFetching,
    resetDetails,
  } = useContext(StationContext);
  useEffect(() => {
    fetchStations("?page=1");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    stationDetailsFetching(event.target.code.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    fetchStations(`?search=${e.target.value}`);
  };
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>

          <div className="lg:col-span-7 col-span-9 h-screen overflow-auto mr-3">
            <div className="md:hidden">
              <NavBarMobile />
            </div>
            <div className="bg-base-100 min-h-screen overflow-auto">
              <div className="flex flex-col justify-start md:ml-5 my-3 gap-y-5">
                <div className="bg-base-300 flex justify-between items-center p-3 rounded-lg shadow-xl">
                  <h1 className="text-2xl">Station Details</h1>
                  <div className="text-sm breadcrumbs">
                    <ul>
                      <li>
                        <FaHouseChimney className="mr-2" />
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <FaBuilding className="mr-2" />
                        <p>Stations</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center p-3">
                  <div
                    className="tooltip tooltip-right"
                    data-tip="Click with caution this will reset the details"
                  >
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={resetDetails}
                    >
                      Reset Details
                    </button>
                  </div>
                  <form onSubmit={handleSubmit} className="join" method="POST">
                    <input
                      name="code"
                      type="text"
                      pattern="^[A-Za-z]$"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      list="stations-datalist"
                      onChange={handleChange}
                      placeholder="Enter Station Name / Code"
                      className="join-item input input-sm input-secondary input-bordered"
                    />
                    <StationDatalist stations={stations} />
                    <button className="join-item btn btn-sm btn-primary">
                      Search
                    </button>
                  </form>
                </div>
                {station ? (
                  <StationDetails station={station} />
                ) : (
                  <StationList
                    stations={stations}
                    handleSubmit={handleSubmit}
                    fetchStations={fetchStations}
                  />
                )}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Stations;
