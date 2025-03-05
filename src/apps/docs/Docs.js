/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Preloader from "../../components/Preloader";
import Sidebar from "../../components/Sidebar";
import { UtilsContext } from "../../context/Context";
import NavBarMobile from "../../components/NavBarMobile";
const Docs = () => {
  const { preload } = useContext(UtilsContext);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>
          <div className="lg:col-span-7 col-span-9 h-screen overflow-auto md:mr-3">
            <div className="md:hidden">
              <NavBarMobile />
            </div>
            <div className="p-5">
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
                <span>Api Docs Available Later.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Docs;
