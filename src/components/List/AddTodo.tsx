import React, { useState } from "react";
import { addTodo } from "../../store/todoListSlice";
import { useAppDispatch } from "../../hook/hooks";

export default function AddTodo() {
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(content));
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between gap-2">
      <input
        type="text"
        placeholder="할 일을 작성해주세요"
        className="p-2 border-solid border-1 border-[color:var(--color-border)] border rounded-md grow text-[16px] outline-none"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        type="submit"
        disabled={content.trim().length <= 0}
        className="disabled:bg-[color:var(--color-disabled)] 
        bg-[color:var(--color-active)]
        text-[color:var(--color-text-bright)] w-20 rounded-md"
      >
        추가
      </button>
    </form>
  );
}
