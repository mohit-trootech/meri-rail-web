import { useState } from "react";
import { UtilsContext } from "../context/Context";
const UtilsProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const data = { toggle, setToggle, previous, setPrevious, next, setNext };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};
export default UtilsProvider;
