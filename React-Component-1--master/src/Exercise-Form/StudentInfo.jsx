import React from "react";
import { Button, Popconfirm } from "antd";
import styles from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, selectedStudent } from "../redux/slice/form";
import useForm from "../hooks/useForm";

const StudentInfo = ({ enableButton }) => {
  const dispatch = useDispatch();
  const { studentList } = useSelector((state) => state.formSlice);

  const handleClickUpdateStudent = (studentValue) => {
    enableButton();
    dispatch(selectedStudent(studentValue));
  };

  const confirm = (studentId) => {
    dispatch(deleteStudent(studentId));
    reset();
  };

  const cancel = () => {
    return;
  };

  return (
    <div className={styles.tableInfo}>
      <table className="table">
        <thead className="bg-black ">
          <tr>
            <td className="text-danger">ID</td>
            <td className="text-danger">FULL NAME</td>
            <td className="text-danger">PHONE</td>
            <td className="text-danger">EMAIL</td>
            <td className="text-danger">COURSE</td>
            <td className="text-danger">GENDER</td>
            <td className="text-danger d-flex justify-content-center">
              ACTION
            </td>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.gender}</td>
                <td>
                  <Popconfirm
                    title="Delete"
                    description="Bạn có chắc muốn xóa học sinh này này ?"
                    onConfirm={() => confirm(student.id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button className="btn btn-success me-2">DELETE</Button>
                  </Popconfirm>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleClickUpdateStudent(student)}
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfo;
