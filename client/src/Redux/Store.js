import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";

export const store = configureStore({
  reducer: {
    User,
  },
});
