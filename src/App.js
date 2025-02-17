/**React JS Imports */
/**React Hooks */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

/**Provider */
import ThemeProvider from "./providers/ThemeProvider";

/**Apps */
import Home from "./apps/home/Home";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastContainer draggablePercent={60} draggable stacked />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
