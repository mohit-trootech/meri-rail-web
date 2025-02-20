/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**User Login Page */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { get_user_google_credentials } from "../../utils/utils";
import { AuthContext, UtilsContext } from "../../context/Context";
import railGif from "../../static/img/meri_rail.gif";
import axios from "axios";
import { FaGoogle, FaUserPlus, FaEye, FaEyeSlash } from "react-icons/fa6";
function AuthRegister() {
  /**User Login Page */
  const { toggle, setToggle } = useContext(UtilsContext);
  const { registerUser, googleAuthRegister } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    registerUser(data);
  };
  const googleAuthRegisterHandler = useGoogleLogin({
    scope:
      "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events",
    onSuccess: async (response) => {
      console.log(response);
      try {
        // Send access token to backend
        const res = await axios.post("http://localhost:8000/auth/google/", {
          access_token: response.access_token,
        });
        console.log("Login successful:", res);
        window.location.href = res.data.auth_url;
      } catch (error) {
        console.error("Login failed:", error);
      }
      // onSuccess: async (tokenResponse) => {
      //   console.log(tokenResponse);
      // let response = await get_user_google_credentials(
      //   codeResponse.access_token
      // );
      // console.log(response);
      // const calendarData = await axios.get(
      //   "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${codeResponse.access_token}`,
      //     },
      //   }
      // );
      // console.log(calendarData);
      // googleAuthRegister({
      //   first_name: response.given_name,
      //   last_name: response.family_name,
      //   email: response.email,
      //   username: response.email,
      //   google_id: response.id,
      //   image: response.picture,
      // });
    },
    onError: (error) => console.error("Login Failed:", error),
  });
  useEffect(() => {
    const abc = async () => {
      const res = await axios.post("http://localhost:8000/auth/google/", {});
      console.log("Login successful:", res);
      window.location.href = res.data.auth_url;
    };
    abc();
  }, []);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card static lg:card-side bg-base-100 shadow-xl grid grid-cols-9 gap-20">
            <figure className="sm:none sm:col-span-0 md:col-span-4 md:block">
              <img src={railGif} alt="Album" className="h-full" />
            </figure>
            <div className="w-full card-body sm:col-span-9 md:col-span-5 flex flex-col justify-center items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Register Now
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center w-full">
                  <div
                    className="tooltip w-full"
                    data-tip="Click to Register with Google"
                  >
                    <button
                      className="w-full btn btn-secondary"
                      onClick={googleAuthRegisterHandler}
                    >
                      <FaGoogle />
                      <span className="ml-4">Sign Up with Google</span>
                    </button>
                  </div>
                </div>
                <div className="divider">
                  <div className="">Or sign up with e-mail</div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="flex flex-col justify-center items-center mt-8 gap-4"
                >
                  <input
                    className="input input-md input-bordered w-full"
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                  />
                  <input
                    className="input input-md input-bordered w-full"
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                  />
                  <input
                    className="input input-md input-bordered w-full"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                  />
                  <input
                    className="input input-md input-bordered w-full"
                    type="text"
                    name="username"
                    placeholder="Choose New Username"
                  />
                  <div className="join w-full">
                    <input
                      className="input input-md input-bordered w-full join-item"
                      type={toggle ? "text" : "password"}
                      name="password"
                      placeholder="Enter Your Password"
                    />
                    <div
                      className="tooltip"
                      data-tip={!toggle ? "View Password" : "Hide Password"}
                    >
                      <button
                        type="button"
                        className="join-item btn btn-ghost border border-gray-700"
                        onClick={() => setToggle(!toggle)}
                      >
                        {!toggle ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      className="input input-md input-bordered w-full join-item"
                      type="text"
                      name="confirm_password"
                      placeholder="Confirm Your Password"
                    />
                    <p className="text-xs text-warning italic">
                      Your password must be at least 8 characters long and
                      contain at least one uppercase letter, one lowercase
                      letter, one number and one special character.
                    </p>
                  </div>
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <p className="mt-6 text-xs text-gray-500 text-center">
                      By signing in, you agree to the Terms and Conditions and
                      Privacy Policy.
                    </p>
                    <button
                      type="submit"
                      className="btn btn-primary btn-md w-full"
                    >
                      <FaUserPlus />
                      <span className="ml-3">Register</span>
                    </button>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Link
                      to="/auth/login/"
                      className="btn btn-xs btn-secondary"
                    >
                      Already Registered ? Login
                    </Link>
                    <Link
                      to="/auth/forgot-password/"
                      className="btn btn-xs btn-link lowercase italic"
                    >
                      forgot password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthRegister;
