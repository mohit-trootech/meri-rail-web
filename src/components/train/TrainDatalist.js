import React from "react";

const TrainDatalist = ({ trains }) => {
  return (
    <datalist id="trains-datalist">
      {trains &&
        trains.map((train) => (
          <option key={train.number} value={train.number} />
        ))}
    </datalist>
  );
};

export default TrainDatalist;
