import React from "react";

const MainModel = ({ nameActive, infoActive }) => {
  return (
    <div className="card__img">
      <img
        src="../../public/glasses/glassesImage/model.jpg"
        width={250}
        height={300}
        alt=""
      />
      <div className="card__body">
        <p className="text-danger card__title">{nameActive}</p>

        <p className="card__desc">{infoActive}</p>
      </div>
    </div>
  );
};

export default MainModel;
