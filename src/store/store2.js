import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

const store2 = configureStore({
  reducer: {
    todos: todosSlice,
  },
});


export default store2;