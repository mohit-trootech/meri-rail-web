import { useState } from "react";
import { UtilsContext } from "../context/Context";
import { BaseUrlPath } from "../utils/contants";
import { GetRequest } from "../utils/AxiosRequest";
const UtilsProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [preload, setPreload] = useState(false);
  const [quota, setQuotas] = useState(null);
  const [journeyClass, setJourneyClass] = useState(null);

  const getTrainQuota = async () => {
    const response = await GetRequest(BaseUrlPath + "api/train_quota/");
    response && setQuotas(response.data);
  };
  const getJourneyClass = async () => {
    const response = await GetRequest(BaseUrlPath + "api/journey_class/");
    response && setJourneyClass(response.data);
  };

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
    quota,
    getTrainQuota,
    journeyClass,
    getJourneyClass,
  };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};
export default UtilsProvider;
