/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { StationContext, TbisContext } from "../../context/Context";
import {
  FaArrowsLeftRight,
  FaArrowsTurnToDots,
  FaHouseChimney,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import TbisTrainList from "../../components/tbis/TbisTrainList";
import StationDataList from "../../components/tbis/StationDatalist";
const Tbis = () => {
  const { tbis, fetchTbisData, resetDetails } = useContext(TbisContext);
  const { stations, fetchStations } = useContext(StationContext);
  console.log(tbis);
  useEffect(() => {
    fetchStations();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTbisData(new FormData(e.target));
  };
  const handleChange = (event) => {
    event.preventDefault();
    fetchStations(`search=${event.target.value}`);
  };
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-7 col-span-9 h-screen overflow-auto mr-3">
          <div className="bg-base-100 min-h-screen overflow-auto">
            <div className="flex flex-col justify-start md:ml-5 my-3 gap-y-5">
              <div className="bg-base-300 flex justify-between items-center p-3 rounded-lg shadow-xl">
                <h1 className="text-2xl">Train Between Station</h1>
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <FaHouseChimney className="mr-2" />
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <FaArrowsTurnToDots className="mr-2" />
                      <p>TBIS</p>
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
              </div>
              <StationDataList stations={stations} />
              {(tbis && (
                <TbisTrainList
                  tbis={tbis}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )) || (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                  method="POST"
                >
                  <div className="card card-border bg-base-100 w-full border border-gray-700 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="card-body">
                      <h2 className="card-title">
                        Search Trains Between Station
                      </h2>
                      <div className="flex flex-col gap-y-3">
                        <div className="flex flex-row gap-y-3 w-full justify-between items-center gap-3">
                          <input
                            defaultValue="ADI"
                            name="from_station"
                            type="text"
                            pattern="^[A-Za-z]{3}$"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            list="stations-datalist"
                            onChange={handleChange}
                            placeholder="Enter Train Code"
                            className="input input-sm input-secondary input-bordered w-full"
                          />
                          <FaArrowsLeftRight className="w-8 h-8 text-primary" />
                          <input
                            defaultValue="ABR"
                            name="to_station"
                            type="text"
                            pattern="^[A-Za-z]{3}$"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            list="stations-datalist"
                            onChange={handleChange}
                            placeholder="Enter Train Code"
                            className="input input-sm input-secondary input-bordered w-full"
                          />
                        </div>
                        <div className="flex flex-row justify-end items-center w-full">
                          <input
                            name="dt"
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            max={
                              new Date(
                                new Date().setMonth(new Date().getMonth() + 4)
                              )
                                .toISOString()
                                .split("T")[0]
                            }
                            placeholder="Enter Journey Date"
                            className="input input-sm input-secondary input-bordered w-1/3"
                          />
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm"
                        >
                          Search Trains
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tbis;
