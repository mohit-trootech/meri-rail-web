import { useState } from "react";
import { UtilsContext } from "../context/Context";
const UtilsProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const data = { toggle, setToggle };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};
export default UtilsProvider;
