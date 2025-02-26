import { useState } from "react";
import { UtilsContext } from "../context/Context";
const UtilsProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [preload, setPreload] = useState(true);
  const updatePreloader = () => {
    setPreload(false);
  };
  const data = {
    toggle,
    setToggle,
    previous,
    setPrevious,
    next,
    setNext,
    preload,
    updatePreloader,
  };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};
export default UtilsProvider;
