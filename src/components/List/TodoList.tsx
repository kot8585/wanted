import { RxTrash } from "react-icons/rx";
import { useAppSelector, useAppDispatch } from "../../hook/hooks";
import { TodoType } from "../../store/todoListSlice";
import { deleteTodo } from "../../store/todoListSlice";

export default function TodoList() {
  const todos = useAppSelector((state) => state.todoList);
  const dispatch = useAppDispatch();

  function handleDelete(todoId: string) {
    dispatch(deleteTodo(todoId));
  }
  return (
    <ul className="flex-col overflow-y-scroll">
      {todos.map((todo: TodoType) => (
        <li
          key={todo.id}
          className="flex justify-between border-b border-solid border-[color:var(--color-border)] items-center mb-1"
        >
          <span className="text-[color:var(--color-text)] px-1">
            {todo.content}
          </span>
          <button
            onClick={() => handleDelete(todo.id)}
            className="text-[color:var(--color-disabled)] p-2 hover:text-[color:var(--color-active)] "
          >
            <RxTrash size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}
