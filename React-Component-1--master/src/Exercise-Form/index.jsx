import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Input from "../components/Input";
import Select from "../components/Select";
import Radio from "../components/Radio";
import validate, {
  checkLengthRule,
  checkTypeRule,
  regexRule,
  requireRule,
} from "../utils/validate";
import useForm from "../hooks/useForm";
import { message } from "antd";
import StudentInfo from "./StudentInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  filterStudent,
  normalizeString,
  updateStudent,
} from "../redux/slice/form";

const Form = () => {
  const dispatch = useDispatch();

  const rules = {
    id: [
      requireRule("ID không để trống"),
      checkTypeRule("ID không đúng định dạng"),
      checkLengthRule("ID tối thiểu 5 ký tự"),
    ],
    name: [
      requireRule("Name không để trống"),
      checkLengthRule("Name tối thiểu 5 ký tự"),
    ],
    email: [
      requireRule("Email không để trống"),
      regexRule(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Email không đúng định dạng"
      ),
    ],
    phone: [
      requireRule("Phone không để trống"),
      regexRule("phone", "Phone không đúng định dạng"),
    ],
    course: [requireRule("Vui lòng chọn khóa học")],
    gender: [requireRule("Vui lòng chọn giới tính")],
  };

  const [isUpdateDisabled, setIsUpdateDisabled] = useState(true);

  const { form, register, setValue, validate, reset } = useForm(
    {
      id: "",
      name: "",
      phone: "",
      email: "",
      course: "",
      gender: "",
    },
    rules
  );
  const handleFormSubmit = () => {
    const errorObject = validate();

    if (Object.keys(errorObject).length > 0) {
      console.log("🚀errorObject---->", errorObject);
    } else {
      message.success("Succeed");
      dispatch(addStudent(form));
      reset();
    }
  };

  const handleClickUpdate = () => {
    const errorObject = validate();

    if (Object.keys(errorObject).length > 0) {
      console.log("🚀errorObject---->", errorObject);
    } else {
      setIsUpdateDisabled(true);
      message.success("Update Succeed");
      dispatch(updateStudent(form));
      reset();
    }
  };

  const enableButton = () => {
    setIsUpdateDisabled(false);
  };

  const _onChangeSearchStudent = (e) => {
    const { value } = e.target;
    const newValue = normalizeString(value);
    dispatch(filterStudent(newValue));
  };

  return (
    <>
      <div className={styles.form}>
        <h2 className={`text-danger text-center ${styles.titleMain}`}>
          Thông Tin Sinh Viên
        </h2>
        <div>
          <Input
            placeholder="Search Student"
            label="Tìm kiếm sinh viên"
            onChange={_onChangeSearchStudent}
          />
        </div>
        <div className="d-flex gap-4 ">
          <Input
            disabled={!isUpdateDisabled}
            placeholder="Nhập Mã Sinh Viên"
            label="Mã Sinh Viên"
            {...register("id")}
          />
          <Input
            {...register("name")}
            placeholder="Nhập Họ và Tên"
            label="Họ và Tên"
          />
        </div>
        <div className="d-flex gap-4">
          <Input
            {...register("phone")}
            placeholder=" Nhập Số Điện Thoại"
            label="Số Điện Thoại"
          />
          <Input
            {...register("email")}
            placeholder="Nhập Email"
            label="Email"
          />
        </div>
        <div className="d-flex gap-4">
          <Input
            label="Chọn Khóa Học"
            {...register("course")}
            renderProps={(rest) => {
              return (
                <Select
                  options={[
                    { value: "", label: "--" },
                    { value: "REACT COURSE", label: "REACT COURSE" },
                    { value: "RESPONSIVE COURSE", label: "RESPONSIVE COURSE" },
                    { value: "HTML/CSS COURSE", label: "HTML/CSS COURSE" },
                  ]}
                  {...rest}
                />
              );
            }}
          />
          <Input
            label="Giới Tính"
            {...register("gender")}
            renderProps={(rest) => {
              return <Radio {...rest} />;
            }}
          />
        </div>
        <button
          disabled={!isUpdateDisabled}
          className="btn btn-danger"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
        <button
          disabled={isUpdateDisabled}
          className="btn btn-warning ms-4 updateStudent"
          onClick={handleClickUpdate}
        >
          Update
        </button>
      </div>

      <StudentInfo enableButton={enableButton} />
    </>
  );
};

export default Form;
