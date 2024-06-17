import React from "react";
import "./bookingTicket.css";
import Screen from "./Screen";
import NumberRow from "./NumberRow";
import SeatList from "./SeatList";
import InfoBookingSeat from "./InfoBookingSeat";

const BookingTicket = () => {
  return (
    <div className="bookingMovie ">
      <div className="container">
        <h1 className="text-center headerTitle">BOOKING TICKET KATIE MOVIE</h1>
        <div className="row ">
          <div className="col-7">
            <Screen />
            <NumberRow />
            <SeatList />
          </div>
          <div className="col-5">
            <InfoBookingSeat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTicket;
