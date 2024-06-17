import { Flex } from "antd";
import React from "react";

const Modal = ({ cart }) => {
  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitleId">
              Item In Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th style={{ display: "flex", justifyContent: "center" }}>
                    Description
                  </th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>
                        <img
                          width={100}
                          height={100}
                          src={item.image}
                          alt="shoe"
                        />
                      </td>
                      <td>{item.quantity}</td>
                      <td>{item.description}</td>
                      <td>{item.price}$</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
