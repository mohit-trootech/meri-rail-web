import { useContext } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { AuthContext } from "../context/Context";
import SidebarContent from "./SidebarContent";
import { Link } from "react-router-dom";
const NavBarMobile = () => {
  const { user, logOutHandler } = useContext(AuthContext);

  return (
    <>
      <div className="drawer">
        <input
          id="sidebarContentDrawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full border-b border-gray-700">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebarContentDrawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <MdOutlineSegment className="text-2xl font-bold" />
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Meri Rail</div>
            {(user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 rounded-full">
                    <img alt="profile" src={user.image} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile/" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={logOutHandler}>Logout</button>
                  </li>
                  <li>
                    <Link to="/docs/">Docs</Link>
                  </li>
                </ul>
              </div>
            )) || (
              <div>
                <Link to="/auth/" className="btn btn-sm btn-primary">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side z-10">
          <div className="bg-base-200 min-h-full w-80">
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
