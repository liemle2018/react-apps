import { useEffect, useRef } from "react";

import { TodoItem, ITodo } from "../TodoItem";

import { ITodoList } from "./types";
import { usePrevious } from "../../utils";

function TodoList({ list }: ITodoList) {
  const listHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const prevTaskLength = usePrevious(list.length);

  useEffect(
    () => {
      if (typeof prevTaskLength === "number" && list.length - prevTaskLength === -1 && listHeadingRef.current) {
        listHeadingRef.current.focus();
      }
    },
    [list.length, prevTaskLength]
  );

  const taskRemaining = `${list.length} task${list.length > 1 ? "s" : ""} remaining`;
  const taskList = list.length > 0 && list.map((task: ITodo) => <TodoItem key={task.id} task={task} />);

  return (
    <>
      <h2 id="list-heading" tabIndex={-1} ref={listHeadingRef}>
        {taskRemaining}{" "}
      </h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </>
  );
}

export default TodoList;
