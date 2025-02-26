/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useContext } from "react";
import { PnrContext, UtilsContext } from "../../context/Context";
import PnrDetails from "../../components/pnr/PnrDetails";
import bgGif from "../../static/img/blue-sky-train.gif";
import Preloader from "../../components/Preloader";

const PnrStatus = () => {
  const { preload } = useContext(UtilsContext);
  const { pnr, fetchPnrStatus } = useContext(PnrContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchPnrStatus(new FormData(event.target));
  };

  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>

          <div className="lg:col-span-7 col-span-9 h-screen overflow-auto">
            {pnr ? (
              <PnrDetails pnr={pnr} handleSubmit={handleSubmit} />
            ) : (
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url(${bgGif})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <form
                    className="bg-base-300 p-10 rounded-lg shadow-2xl"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <h1 className="mb-5 text-5xl font-bold">PNR Status</h1>
                    <p className="mb-5">
                      Enter your 10 digit PNR number to check the status
                    </p>
                    <input
                      type="number"
                      pattern="^[0-9]{10}$"
                      placeholder="Enter your PNR number"
                      name="pnr"
                      className="input input-bordered input-sm w-full mb-5"
                    />
                    <button className="btn btn-primary">Get Started</button>
                  </form>
                </div>
              </div>
            )}
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default PnrStatus;
