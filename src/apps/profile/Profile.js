/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect } from "react";
import { AuthContext, UtilsContext } from "../../context/Context";
import Sidebar from "../../components/Sidebar";
import Preloader from "../../components/Preloader";
import NavBarMobile from "../../components/NavBarMobile";
import UserProfile from "../../components/profile/UserProfile";
const Profile = () => {
  const { preload } = useContext(UtilsContext);
  const { user, details, updateUserDetails, getUserDetails } =
    useContext(AuthContext);
  useEffect(() => {
    user && getUserDetails();
  }, [user]);
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
            <UserProfile
              details={details}
              updateUserDetails={updateUserDetails}
            />
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
