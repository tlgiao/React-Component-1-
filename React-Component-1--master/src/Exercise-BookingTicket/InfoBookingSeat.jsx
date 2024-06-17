import React from "react";
import DefineSelectedChair from "./DefineSelectedChair";
import TableInfo from "./TableInfo";

const InfoBookingSeat = () => {
  return (
    <div className="ms-4">
      <h2 className="text-center text-danger mt-3">LIST OF SELECTED LIST</h2>
      <DefineSelectedChair />
      <TableInfo />
    </div>
  );
};

export default InfoBookingSeat;
