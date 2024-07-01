import React, { useEffect, useState } from "react";
import validate from "../utils/validate";
import { useSelector } from "react-redux";

const useForm = (initialState, rules) => {
  const [form, setForm] = useState(initialState);

  const { updateStudent } = useSelector((state) => state.formSlice);

  const [error, setError] = useState({});

  const reset = () => {
    setForm(initialState);
  };

  const register = (registerField) => {
    return {
      name: registerField,
      value: form[registerField] || "", // Set the input value from form state
      error: error[registerField],
      onChange: (e) => {
        const value = e.target ? e.target.value : e.value;
        setForm({
          ...form,
          [registerField]: value,
        });
      },
    };
  };

  const _validate = () => {
    const errorObject = validate(rules, form);
    setError(errorObject);
    return errorObject;
  };

  const setValue = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (updateStudent) {
      setForm(updateStudent);
    }
  }, [updateStudent]);

  return {
    form,
    error,
    register,
    setValue,
    validate: _validate,
    reset,
  };
};

export default useForm;
