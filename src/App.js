/**React JS Imports */
/**React Hooks */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/**Provider */
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import UtilsProvider from "./providers/UtilsProvider";
import PnrProvider from "./providers/PnrProvider";
/**Apps */
import Home from "./apps/home/Home";
import AuthLogin from "./apps/auth/AuthLogin";
import AuthRegister from "./apps/auth/AuthRegister";
import PnrStatus from "./apps/pnr_status/PnrStatus";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UtilsProvider>
          <AuthProvider>
            <PnrProvider>
              <ToastContainer draggablePercent={60} draggable stacked />
              <Routes>
                {/* Auth Routes */}
                <Route path="/auth/login/" element={<AuthLogin />} />
                <Route path="/auth/register/" element={<AuthRegister />} />
                {/* App Routes*/}
                <Route path="/" element={<Home />} />
                <Route path="pnr-status/" element={<PnrStatus />} />
              </Routes>
            </PnrProvider>
          </AuthProvider>
        </UtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
