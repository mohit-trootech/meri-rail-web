/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../components/Sidebar";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";
const Home = () => {
  const { updateTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="grid grid-cols-9 gap-2">
        <div className="hidden lg:block lg:col-span-2">
          <Sidebar />
        </div>

        <div className="lg:col-span-7">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={updateTheme}
          >
            <option disabled selected>
              Who shot first?
            </option>
            <option value="light">light</option>
            <option value={"dark"}>Dark</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Home;
