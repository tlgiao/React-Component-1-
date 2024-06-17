import React from "react";

const UnitGlasses = ({
  glass,
  handleChange,
  handleChangeName,
  handleChangeInfo,
}) => {
  const handleChangeGlass = (valueId, valueName, valueInfo) => {
    handleChange(valueId);
    handleChangeName(valueName);
    handleChangeInfo(valueInfo);
  };
  return (
    <img
      className="unit_glass"
      src={glass.url}
      width={120}
      height={100}
      alt=""
      style={{ cursor: "pointer" }}
      onClick={() => handleChangeGlass(glass.id, glass.name, glass.desc)}
    />
  );
};

export default UnitGlasses;
