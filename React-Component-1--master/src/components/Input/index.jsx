import React from "react";
import styles from "../../Exercise-Form/style.module.scss";

const Input = ({ label, error, renderProps, ...rest }) => {
  return (
    <div className={styles.formGroup}>
      <label className={`${styles.label} mb-3`}>{label}</label>
      {renderProps?.({ error, ...rest }) || (
        <input
          {...rest}
          type="text"
          className={`${styles.formInput} ${error ? styles.errorBorder : ""}`}
        />
      )}

      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
