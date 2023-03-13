import { configureStore } from "@reduxjs/toolkit";
import User from "./UserSlice";
import Movie from "./Movieslice";

export const store = configureStore({
  reducer: {
    User,
    Movie,
  },
});
