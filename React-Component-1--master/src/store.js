import { configureStore } from "@reduxjs/toolkit";
import { bookingTicketReducer } from "./reducer/bookingTicketReducer";
import form from "./redux/slice/form";

const store = configureStore({
  reducer: {
    bookingTicketReducer,
    formSlice: form,
  },
});

export default store;
