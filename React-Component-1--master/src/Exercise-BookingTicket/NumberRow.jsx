import React from "react";
import { useSelector } from "react-redux";

const NumberRow = () => {
  const { seatListData } = useSelector((state) => state.bookingTicketReducer);

  const newSeatListData = [...seatListData].splice(0, 1);
  return (
    <div className="d-flex" style={{ marginLeft: "56px" }}>
      {newSeatListData.map((item) => {
        const { seatList } = item;
        return seatList.map((item) => {
          return (
            <span className="rowNumber" key={item.numberSeat}>
              {item.numberSeat}
            </span>
          );
        });
      })}
    </div>
  );
};

export default NumberRow;
