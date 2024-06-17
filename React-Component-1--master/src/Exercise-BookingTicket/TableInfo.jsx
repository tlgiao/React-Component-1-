import { Button, Popconfirm, message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TableInfo = () => {
  const dispatch = useDispatch();
  const { bookedSeatList } = useSelector((state) => state.bookingTicketReducer);

  // const handleClickDeleteSeat = (numberSeatValue) => {};

  const handleClickBookingTicket = () => {
    dispatch({ type: "complete" });
    message.success("Booking Succeed");
  };

  const confirm = (numberSeatValue) => {
    dispatch({ type: "delete", numberSeatValue });
  };

  const cancel = () => {
    return;
  };

  return (
    <>
      <table className="table ">
        <thead>
          <tr>
            <th>Number Seat</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        {bookedSeatList.map((item) => {
          return (
            <tbody>
              <tr key={item.numberSeat}>
                <td>{item.numberSeat}</td>
                <td>{item.price}</td>
                <td>
                  <Popconfirm
                    title="Delete"
                    description="Bạn có chắc muốn bỏ ghế này ?"
                    onConfirm={() => confirm(item.numberSeat)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="btn btn-danger">X</Button>
                  </Popconfirm>
                </td>
              </tr>
            </tbody>
          );
        })}
        <tr>
          <tr style={{ marginLeft: "100px", fontSize: "30px" }}>
            Total:
            {bookedSeatList.reduce((total, item) => {
              return (total += item.price);
            }, 0)}
          </tr>
        </tr>
        <tr>
          {bookedSeatList.length > 0 && (
            <button
              className="btn btn-danger text-center"
              onClick={() => handleClickBookingTicket()}
            >
              Confirm Selection
            </button>
          )}
        </tr>
      </table>
    </>
  );
};

export default TableInfo;
