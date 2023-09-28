import { PropsWithChildren, useMemo, useReducer } from "react";
import { ulid } from "ulid";

import TodoContext, { TTodoAction } from "../contexts/todo";
import { ITodo } from "../components/TodoItem";

const { Provider } = TodoContext;

const TodoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const todoContext = useMemo(() => ({ tasks, dispatch }), [tasks]);

  return <Provider value={todoContext}>{children}</Provider>;
};

export default TodoProvider;

function tasksReducer(tasks: ITodo[], action: TTodoAction) {
  switch (action.type) {
    case "added": {
      const id = `todo-${ulid()}`;
      const newTask: ITodo = {
        id,
        name: action.name,
        completed: false
      };
      return [...tasks, newTask];
    }
    case "changed": {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      return tasks;
    }
  }
}
