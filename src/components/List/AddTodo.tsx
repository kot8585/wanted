import React from "react";

export default function AddTodo() {
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
      >
        추가
      </button>
    </form>
  );
}
