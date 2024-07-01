import { createSlice } from "@reduxjs/toolkit";

const initialTable = {
  studentList: [],
  updateStudent: {},
};

export const normalizeString = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const formSlice = createSlice({
  name: "form",
  initialState: initialTable,
  reducers: {
    addStudent: (state, action) => {
      state.studentList = [...state.studentList, action.payload];
    },
    selectedStudent: (state, action) => {
      state.updateStudent = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.studentList.findIndex((student) => {
        return student.id === action.payload.id;
      });
      if (index !== -1) {
        state.studentList[index] = action.payload;
      }
    },
    filterStudent: (state, action) => {
      const searchValue = action.payload.toLowerCase();
      const result = state.studentList.filter((student) => {
        return normalizeString(student.name).includes(searchValue);
      });
      state.studentList = result;
    },
    deleteStudent: (state, action) => {
      console.log("🚀action.payload.id---->", action.payload);
      const index = state.studentList.findIndex((student) => {
        return student.id === action.payload;
      });
      console.log("🚀index---->", index);
      if (index !== -1) {
        state.studentList.splice(index, 1);
      }
    },
  },
});

export const {
  addStudent,
  selectedStudent,
  updateStudent,
  filterStudent,
  deleteStudent,
} = formSlice.actions;

export default formSlice.reducer;
