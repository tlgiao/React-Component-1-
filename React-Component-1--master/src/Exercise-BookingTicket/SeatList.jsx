import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SeatList = () => {
  const dispatch = useDispatch();

  const { seatListData } = useSelector((state) => state.bookingTicketReducer);
  const { bookedSeatList } = useSelector((state) => state.bookingTicketReducer);
  const newSeatListData = [...seatListData];
  newSeatListData.splice(0, 1);

  const handleClickBookingSeat = (item) => {
    dispatch({ type: "add", item });
  };

  return (
    <>
      {newSeatListData.map((item, index) => {
        const { seatList } = item;
        return (
          <div className="d-flex" key={"row" + item.row}>
            <div className="flex-column">
              <span className="firstChar">{item.row}</span>
            </div>
            {seatList.map((item) => {
              let booked = "";
              if (item.booked) {
                booked = "bookedSeat";
              }
              let booking = "";

              let index = bookedSeatList.findIndex((value) => {
                return value.numberSeat === item.numberSeat;
              });
              if (index !== -1) {
                booking = "bookingSeat";
              }

              return (
                <button
                  onClick={() => {
                    if (item.booked) {
                      return;
                    }

                    handleClickBookingSeat(item);
                  }}
                  className={`numberSeat ${booking} ${booked}  `}
                  key={"numberSeat" + item.numberSeat}
                >
                  {item.numberSeat}
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default SeatList;
