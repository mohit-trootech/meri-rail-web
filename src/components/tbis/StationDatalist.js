import React from "react";

const StationDataList = ({ stations }) => {
  return (
    <datalist id="stations-datalist">
      {stations &&
        stations.map((station) => (
          <option key={station.code} value={station.code}>
            {station.name}
          </option>
        ))}
    </datalist>
  );
};

export default StationDataList;
