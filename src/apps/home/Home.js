/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Preloader from "../../components/Preloader";
import Sidebar from "../../components/Sidebar";
import { UtilsContext } from "../../context/Context";
import NavBarMobile from "../../components/NavBarMobile";
import Service from "../../components/home/Services";
const Home = () => {
  const { preload } = useContext(UtilsContext);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>

          <div className="lg:col-span-7 col-span-9 h-screen overflow-auto md:mr-3">
            {/* NavBar Viewport Small */}
            <div className="md:hidden">
              <NavBarMobile />
            </div>
            <div>
              <Service />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
