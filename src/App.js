/**React JS Imports */
/**React Hooks */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/**Provider */
import ThemeProvider from "./providers/ThemeProvider";
import AuthProvider from "./providers/AuthProvider";
import UtilsProvider from "./providers/UtilsProvider";

/**Apps */
import Home from "./apps/home/Home";
import AuthLogin from "./apps/auth/AuthLogin";
import AuthRegister from "./apps/auth/AuthRegister";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UtilsProvider>
          <AuthProvider>
            <ToastContainer draggablePercent={60} draggable stacked />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth/login/" element={<AuthLogin />} />
              <Route path="/auth/register/" element={<AuthRegister />} />
            </Routes>
          </AuthProvider>
        </UtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
