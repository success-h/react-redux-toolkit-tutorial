import { configureStore } from "@reduxjs/toolkit";
import reservationsReducerSlice from "../features/reservationSlice";
import customerReducerSlice from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducerSlice,
    customers: customerReducerSlice,
  },
});
