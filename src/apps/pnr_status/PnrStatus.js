/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
const PnrStatus = () => {
  return (
    <>
      <div className="grid grid-cols-9">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>

        <div className="lg:col-span-7">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PnrStatus;
