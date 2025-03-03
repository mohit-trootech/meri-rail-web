import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import {
  FaHouseChimney,
  FaTrainSubway,
  FaArrowsTurnToDots,
  FaBuilding,
} from "react-icons/fa6";
import ThemeOptions from "./ThemeOptions";
import { ThemeContext } from "../context/Context";
import { MdOutlineRailwayAlert } from "react-icons/md";

const SidebarContent = () => {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <header className="p-4 pb-0 flex justify-between items-center gap-x-2">
          <Link className="text-xl font-bold" to="/" aria-label="Brand">
            Meri Rail
          </Link>
          <div className="flex items-center justify-end gap-x-2">
            <select
              className="select select-xs select-bordered"
              onChange={updateTheme}
              defaultValue={theme}
            >
              <ThemeOptions theme={theme} />
            </select>
            <label
              className="
            md:hidden btn btn-sm btn-circle bg-gray-700 border border-gray-700 transition duration-150 ease-in-out hover:bg-gray-900 hover:rotate-180"
              htmlFor="sidebarContentDrawer"
              aria-label="close sidebar"
            >
              ✕
            </label>
          </div>
        </header>
        <div className="divider mt-0"></div>
        <ul className="menu bg-base-200 rounded-box gap-3">
          <li className="bg-base-100 rounded-lg">
            <NavLink to="/">
              <FaHouseChimney />
              Home
            </NavLink>
          </li>
          <li className="bg-base-100 rounded-lg">
            <NavLink to="/pnr-status">
              <FaTrainSubway />
              PNR Status
            </NavLink>
          </li>
          <li>
            <details open>
              <summary className="mb-3">Details</summary>
              <ul className="flex flex-col gap-3">
                <li className="bg-base-100 rounded-lg">
                  <NavLink to="/trains">
                    <MdOutlineRailwayAlert />
                    Train Details
                  </NavLink>
                </li>
                <li className="bg-base-100 rounded-lg">
                  <NavLink to="/stations">
                    <FaBuilding />
                    Station Details
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>

          <li className="bg-base-100 rounded-lg">
            <NavLink to="/tbis/">
              <FaArrowsTurnToDots />
              Trains Between Statios
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarContent;
