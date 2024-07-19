import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice.jsx";

export const store = configureStore({
  reducer: {
    snakeAndLadder: gameReducer,
  },
});
