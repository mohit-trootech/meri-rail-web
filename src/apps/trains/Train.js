/* eslint-disable */
import React, { useContext, useEffect } from "react";
import { TrainContext } from "../../context/Context";
import TrainDetails from "../../components/train/TrainDetails";
import TrainList from "../../components/train/TrainList";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaHouseChimney, FaTrainSubway } from "react-icons/fa6";
import TrainDatalist from "../../components/train/TrainDatalist";
const Train = () => {
  const { train, trains, fetchTrains, trainDetailsFetching, resetDetails } =
    useContext(TrainContext);
  useEffect(() => {
    fetchTrains("page=1");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    trainDetailsFetching(event.target.number.value);
  };
  const handleChange = (event) => {
    event.preventDefault();
    fetchTrains(`search=${event.target.value}`);
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
                <h1 className="text-2xl">Train Details</h1>
                <div className="text-sm breadcrumbs">
                  <ul>
                    <li>
                      <FaHouseChimney className="mr-2" />
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <FaTrainSubway className="mr-2" />
                      <p>Trains</p>
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
                    name="number"
                    type="text"
                    pattern="^[0-9]{5}$"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    list="trains-datalist"
                    onChange={handleChange}
                    placeholder="Enter Train Code"
                    className="join-item input input-sm input-secondary input-bordered"
                  />
                  <TrainDatalist trains={trains} />
                  <button className="join-item btn btn-sm btn-primary">
                    Search
                  </button>
                </form>
              </div>
              {train ? (
                <TrainDetails train={train} />
              ) : (
                <TrainList trains={trains} handleSubmit={handleSubmit} />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Train;
