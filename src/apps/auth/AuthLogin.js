/* eslint-disable */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { get_user_google_credentials } from "../../utils/utils";
import { AuthContext, UtilsContext } from "../../context/Context";
import railGif from "../../static/img/meri_rail.gif";
import {
  FaGoogle,
  FaArrowRightToBracket,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";

function AuthLogin() {
  /**User Login Page */
  const { toggle, setToggle } = useContext(UtilsContext);
  const { loginUser, googleAuthLogin } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    loginUser(data);
  };
  const googleAuthLoginHandler = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      window.localStorage.setItem(
        "google_response",
        JSON.stringify(codeResponse)
      );
      let response = await get_user_google_credentials(
        codeResponse.access_token
      );
      googleAuthLogin({
        email: response.email,
        google_id: response.id,
      });
    },
    onError: (error) => console.error("Login Failed:", error),
  });

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
                Login to your account
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center w-full">
                  <div
                    className="tooltip w-full"
                    data-tip="Click to Login with Google"
                  >
                    <button
                      className="w-full btn btn-secondary"
                      onClick={googleAuthLoginHandler}
                    >
                      <FaGoogle />
                      <span className="ml-4">Sign In with Google</span>
                    </button>
                  </div>
                </div>
                <div className="divider">
                  <div className="">Or sign in with e-mail</div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="flex flex-col justify-center items-center mt-8 gap-4"
                >
                  <input
                    className="input input-md input-bordered w-full"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
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
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <p className="mt-6 text-xs text-gray-500 text-center">
                      By signing in, you agree to the Terms and Conditions and
                      Privacy Policy.
                    </p>
                    <button
                      type="submit"
                      className="btn btn-primary btn-md w-full"
                    >
                      <FaArrowRightToBracket />
                      <span className="ml-3">Sign In</span>
                    </button>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <Link
                      to="/auth/register/"
                      className="btn btn-xs btn-warning"
                    >
                      New here ? Register Now
                    </Link>
                    <Link
                      to="/auth/forgot-password/"
                      className="btn btn-xs btn-link"
                    >
                      forgot password
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

export default AuthLogin;
