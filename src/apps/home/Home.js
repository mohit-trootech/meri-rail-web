/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import Preloader from "../../components/Preloader";
import Sidebar from "../../components/Sidebar";
import { UtilsContext } from "../../context/Context";
const Home = () => {
  const { preload } = useContext(UtilsContext);
  return (
    <>
      {(preload && <Preloader />) || (
        <div className="grid grid-cols-9 gap-2">
          <div className="hidden lg:block lg:col-span-2">
            <Sidebar />
          </div>

          <div className="lg:col-span-7">
            <div className="p-14">React App with Google Calendar API!</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
