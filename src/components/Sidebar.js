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
import { MdOutlineRailwayAlert, MdOutlineLogin } from "react-icons/md";
import { AuthContext } from "../context/Context";

const Sidebar = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const { user, logOutHandler } = useContext(AuthContext);
  return (
    <>
      <div className="h-screen bg-base-200 overflow-y-auto shadow-xl flex flex-col justify-between align-center">
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
        <div>
          <div className="divider mb-0"></div>
          {(user && (
            <>
              <div className="dropdown dropdown-top dropdown-hover dropdown-center w-full p-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-primary w-full"
                >
                  <div className="flex flex-row justify-start items-center w-full gap-3">
                    <img
                      className="rounded-full w-8 h-8"
                      src={user.image}
                      alt="avatar"
                    />
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-sm text-grap-100">
                        {user.get_full_name}
                      </p>
                      <p className="text-xs text-gray-300">{user.email}</p>
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-300 shadow border rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile/">Profile</Link>
                  </li>
                  <li>
                    <button onClick={logOutHandler}>Logout</button>
                  </li>
                  <li>
                    <Link to="/docs/">About</Link>
                  </li>
                </ul>
              </div>
            </>
          )) || (
            <>
              <MdOutlineLogin />
              <Link to="/auth/">Login</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
