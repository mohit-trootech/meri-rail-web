/* eslint-disable */
import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { get_user_google_credentials } from "../../utils/utils";
import { AuthContext } from "../../context/Context";
import railGif from "../../static/img/meri_rail.gif";
import MeriRailLogo from "../../static/img/meri_rail.webp";
import { FcGoogle } from "react-icons/fc";
function AuthView() {
  /**User Login Page */
  const { loginUser, googleAuthLogin, googleAuthRegister } =
    useContext(AuthContext);
  const handleGoogleRegisterClick = (event) => {
    event.preventDefault();
    googleAuthRegister();
  };
  const handleGoogleLoginClick = useGoogleLogin({
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
          <div className="card static lg:card-side bg-base-100 shadow-xl grid grid-cols-9">
            <figure className="col-span-0 hidden md:col-span-4 md:block">
              <img
                src={railGif}
                alt="Album"
                className="h-full hidden md:block"
              />
            </figure>
            <div className="w-full card-body col-span-9 md:col-span-5 flex flex-col">
              <div className="flex justify-start items-start">
                <img src={MeriRailLogo} className="h-16" />
              </div>
              <div className="flex flex-col item-start justify-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                  Welcome to Meri Rail
                </h1>
                <small className="text-xs">Your Journey, Your Way!</small>
              </div>
              <div className="flex flex-col gap-10 mt-10">
                <div className="flex flex-row gap-4 justify-around items-center">
                  <button
                    className="flex overflow-hidden items-center text-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 px-4 py-2 max-w-xs h-14 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                    onClick={handleGoogleLoginClick}
                  >
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                    <div className="flex items-center">
                      <FcGoogle />
                      <span className="ml-1 text-white">Login with Google</span>
                    </div>
                  </button>
                </div>
                <div className="divider">OR</div>
                <div className="flex flex-row gap-4 justify-around items-center">
                  <button
                    className="flex overflow-hidden items-center text-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 px-4 py-2 max-w-xs h-14 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                    onClick={handleGoogleRegisterClick}
                  >
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                    <div className="flex items-center">
                      <FcGoogle className="w-4 h-4 text-gray-500 transition-all duration-300 opacity-60 group-hover:opacity-100" />
                      <span className="ml-1 text-white">
                        Register with Google
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthView;
