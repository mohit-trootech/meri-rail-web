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
import TbisProvider from "./providers/TbisProvider";
import StationProvider from "./providers/StationProvider";
/**Apps */
import Home from "./apps/home/Home";
import AuthView from "./apps/auth/AuthView";
import PnrStatus from "./apps/pnr_status/PnrStatus";
import Train from "./apps/trains/Train";
import Tbis from "./apps/tbis/Tbis";
import Stations from "./apps/stations/Stations";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UtilsProvider>
          <AuthProvider>
            <FirebaseProvider>
              <StationProvider>
                <TrainProvider>
                  <TbisProvider>
                    <PnrProvider>
                      <ToastContainer draggablePercent={60} draggable stacked />
                      <Routes>
                        {/* Auth Routes */}
                        <Route path="/auth/" element={<AuthView />} />
                        {/* App Routes*/}
                        <Route path="/" element={<Home />} />
                        <Route path="pnr-status/" element={<PnrStatus />} />
                        <Route path="trains/" element={<Train />} />
                        <Route path="tbis/" element={<Tbis />} />
                        <Route path="stations/" element={<Stations />} />
                      </Routes>
                    </PnrProvider>
                  </TbisProvider>
                </TrainProvider>
              </StationProvider>
            </FirebaseProvider>
          </AuthProvider>
        </UtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
