import React from "react";

const ChoosingGlass = ({ glassChoosing }) => {
  return (
    <div>
      <p className="text-center text-danger">This Glass is being selected</p>
      <img
        width={150}
        height={100}
        src={glassChoosing}
        alt=""
        style={{ marginLeft: 20, marginTop: 20 }}
      />
    </div>
  );
};

export default ChoosingGlass;
