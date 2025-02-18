/**React JS Imports */
/**React Hooks */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/**Provider */
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import UtilsProvider from "./providers/UtilsProvider";
import PnrProvider from "./providers/PnrProvider";
import TrainProvider from "./providers/TrainProvider";
import FirebaseProvider from "./providers/FirebaseProvider";
/**Apps */
import Home from "./apps/home/Home";
import AuthLogin from "./apps/auth/AuthLogin";
import AuthRegister from "./apps/auth/AuthRegister";
import PnrStatus from "./apps/pnr_status/PnrStatus";
import Train from "./apps/trains/Train";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UtilsProvider>
          <AuthProvider>
            <FirebaseProvider>
              <TrainProvider>
                <PnrProvider>
                  <ToastContainer draggablePercent={60} draggable stacked />
                  <Routes>
                    {/* Auth Routes */}
                    <Route path="/auth/login/" element={<AuthLogin />} />
                    <Route path="/auth/register/" element={<AuthRegister />} />
                    {/* App Routes*/}
                    <Route path="/" element={<Home />} />
                    <Route path="pnr-status/" element={<PnrStatus />} />
                    <Route path="trains/" element={<Train />} />
                  </Routes>
                </PnrProvider>
              </TrainProvider>
            </FirebaseProvider>
          </AuthProvider>
        </UtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
