import React from "react";
import UnitGlasses from "./UnitGlasses";

const RenderGlasses = ({
  dataGlasses,
  handleChange,
  handleChangeName,
  handleChangeInfo,
}) => {
  return (
    <div className="d-flex justify-content-between flex-wrap render__glasses mt-5">
      {dataGlasses.map((item, index) => {
        return (
          <UnitGlasses
            handleChange={handleChange}
            handleChangeName={handleChangeName}
            handleChangeInfo={handleChangeInfo}
            key={item.id || index}
            glass={item}
          />
        );
      })}
    </div>
  );
};

export default RenderGlasses;
