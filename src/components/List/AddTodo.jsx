import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/todoListSlice";

export default function AddTodo() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <form className="flex justify-between gap-2">
      <input
        type="text"
        placeholder="할 일을 작성해주세요"
        className="p-2 border-solid border-1 border-[color:var(--color-border)] border rounded-md grow text-[16px] outline-none"
      />
      <button
        type="submit"
        className="bg-[color:var(--color-disabled)] text-[color:var(--color-text-bright)] w-20 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment());
        }}
      >
        추가 {count}
      </button>
    </form>
  );
}
