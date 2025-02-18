import React from "react";

const TrainCard = ({ train }) => {
  return (
    <div>
      <h1>{train.name}</h1>
      <p>{train.number}</p>
    </div>
  );
};

export default TrainCard;
