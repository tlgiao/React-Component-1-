import React from "react";
import styles from "../../Exercise-Form/style.module.scss";

const Radio = ({ value, ...rest }) => {
  return (
    <>
      <div className="d-flex">
        <input
          {...rest}
          checked={value === "Male"}
          type="radio"
          value="Male"
          name="gender"
        />
        <label className={`${styles.label} ${styles.gender} `}>Nam</label>
      </div>
      <div className="d-flex">
        <input
          {...rest}
          checked={value === "Female"}
          type="radio"
          value="Female"
          name="gender"
        />
        <label className={`${styles.label} ${styles.gender} `}>Nữ</label>
      </div>
    </>
  );
};

export default Radio;
