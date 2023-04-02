import { configureStore } from "@reduxjs/toolkit";

//Slice Imports
import movieReducer from "./slices/MovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
