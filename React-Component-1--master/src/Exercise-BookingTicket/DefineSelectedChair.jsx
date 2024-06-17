import React from "react";

const DefineSelectedChair = () => {
  return (
    <>
      <div className="d-flex mb-3">
        <div className="bookedSeat"></div>
        <span className="ms-4">Reserved Seat</span>
      </div>
      <div className="d-flex  mb-3">
        <div className="bookingSeat"></div>
        <span className="ms-4">Selected Seat</span>
      </div>
      <div className="d-flex chair">
        <div className="numberSeat"></div>
        <span className="ms-4">Not Selected Seat</span>
      </div>
    </>
  );
};

export default DefineSelectedChair;
