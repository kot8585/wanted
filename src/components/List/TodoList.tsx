import { RxTrash } from "react-icons/rx";

export default function TodoList() {
  return (
    <ul className="flex-col overflow-y-scroll">
      <li className="flex justify-between border-b border-solid border-[color:var(--color-border)] items-center mb-1">
        <span className="text-[color:var(--color-text)] px-1">코딩하기</span>
        <button className="text-[color:var(--color-disabled)] p-2 hover:text-[color:var(--color-active)] ">
          <RxTrash size={20} />
        </button>
      </li>
    </ul>
  );
}
