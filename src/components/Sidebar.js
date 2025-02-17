import { Link, NavLink } from "react-router-dom";
import {
  FaHouseChimney,
  FaTrainSubway,
  FaArrowsTurnToDots,
} from "react-icons/fa6";
import profile from "../static/img/profile.jpg";
const Sidebar = () => {
  return (
    <>
      <div class="h-screen bg-base-200 w-11/12 overflow-y-auto shadow-xl flex flex-col justify-between align-center">
        <div>
          <header class="p-4 pb-0 flex justify-between items-center gap-x-2">
            <Link class="text-xl font-bold" to="/" aria-label="Brand">
              Meri Rail
            </Link>
          </header>
          <div class="divider mt-0"></div>
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
          <div class="divider mb-0"></div>
          <div class="btn btn-primary m-2 w-11/12 flex justify-start align-center">
            <div>
              <img class="rounded-full w-8 h-8" src={profile} alt="avatar" />
            </div>
            <div class="flex flex-col justify-center items-start">
              <p class="text-sm text-grap-100">Mohit</p>
              <p class="text-xs text-gray-300">alexis81@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
