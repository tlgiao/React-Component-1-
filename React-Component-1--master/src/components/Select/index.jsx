import React from "react";
import styles from "../../Exercise-Form/style.module.scss";

const Select = ({ error, options, ...rest }) => {
  return (
    <select
      {...rest}
      className={`${styles.formInput} ${error ? styles.errorBorder : ""}`}
    >
      {options?.map((option) => {
        return (
          <option value={option?.value} key={option?.value}>
            {option?.label || ""}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
