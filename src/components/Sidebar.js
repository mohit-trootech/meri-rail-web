import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import {
  FaHouseChimney,
  FaTrainSubway,
  FaArrowsTurnToDots,
} from "react-icons/fa6";
import profile from "../static/img/profile.jpg";
import ThemeOptions from "./ThemeOptions";
import { ThemeContext } from "../context/Context";
const Sidebar = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="h-screen bg-base-200 w-11/12 overflow-y-auto shadow-xl flex flex-col justify-between align-center">
        <div>
          <header className="p-4 pb-0 flex justify-between items-center gap-x-2">
            <Link className="text-xl font-bold" to="/" aria-label="Brand">
              Meri Rail
            </Link>
            <select
              className="select select-xs select-bordered"
              onChange={updateTheme}
              defaultValue={theme}
            >
              <ThemeOptions theme={theme} />
            </select>
          </header>
          <div className="divider mt-0"></div>
          <ul className="menu bg-base-200 w-56 rounded-box">
            <li>
              <NavLink to="/">
                <FaHouseChimney />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pnr-status/">
                <FaTrainSubway />
                PNR Status
              </NavLink>
            </li>
            <li>
              <NavLink to="/tbis/">
                <FaArrowsTurnToDots />
                Trains Between Statios
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <div className="divider mb-0"></div>
          <div className="btn btn-primary m-2 w-11/12 flex justify-start align-center">
            <div>
              <img
                className="rounded-full w-8 h-8"
                src={profile}
                alt="avatar"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-sm text-grap-100">Mohit</p>
              <p className="text-xs text-gray-300">alexis81@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
