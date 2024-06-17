import React from "react";

const GlassActive = ({ glassActive }) => {
  return (
    <div>
      <img
        src={glassActive}
        width={120}
        height={50}
        alt=""
        className="glass__active"
      />
    </div>
  );
};

export default GlassActive;
