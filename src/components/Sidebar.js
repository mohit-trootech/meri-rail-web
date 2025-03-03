import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { AuthContext } from "../context/Context";
import SidebarContent from "./SidebarContent";
const Sidebar = () => {
  const { user, logOutHandler } = useContext(AuthContext);
  return (
    <>
      <div className="h-screen bg-base-200 overflow-y-auto shadow-xl flex flex-col justify-between align-center">
        <SidebarContent />
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
              <div className="px-3 w-full">
                <Link to="/auth/" className="btn btn-primary w-full">
                  <MdOutlineLogin />
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
