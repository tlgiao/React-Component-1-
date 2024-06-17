import { configureStore } from "@reduxjs/toolkit";
import { bookingTicketReducer } from "./reducer/bookingTicketReducer";

const store = configureStore({
  reducer: {
    bookingTicketReducer,
  },
});

export default store;
