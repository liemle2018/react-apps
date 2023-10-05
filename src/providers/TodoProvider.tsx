import { PropsWithChildren, useMemo, useReducer } from "react";

import TodoContext from "../contexts/todo";
import { tasksReducer } from "../reducers/todoReducer";

const { Provider } = TodoContext;

const TodoProvider = ({ children }: PropsWithChildren<{}>) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const todoContext = useMemo(() => ({ tasks, dispatch }), [tasks]);

  return <Provider value={todoContext}>{children}</Provider>;
};

export default TodoProvider;
