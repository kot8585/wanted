import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { v4 as uuidv4 } from "uuid";

export interface TodoType {
  id: string;
  content: string;
}

// Define the initial state using that type
const initialState: TodoType[] = [
  { id: uuidv4(), content: "코딩하기" },
  { id: uuidv4(), content: "독서하기" },
];
export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = { id: uuidv4(), content: action.payload };
      state.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter(
        (todoListSlice) => todoListSlice.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoListSlice.actions;

export const selectCount = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
