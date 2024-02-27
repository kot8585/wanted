import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./todoListSlice";

export default configureStore({
  reducer: { counter: counterReducer },
});
