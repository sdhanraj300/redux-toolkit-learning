import { createSlice } from "@reduxjs/toolkit";
const todoList = [];
const todoSlice = createSlice({
  name : 'todo',
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;