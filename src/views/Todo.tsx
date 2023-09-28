import { useState } from "react";

import { TodoForm } from "../components/Forms";
import TodoList from "../components/TodoList/TodoList";
import { FilterButton } from "../components/FilterButton";
import { TKeyOfFilterMap, FILTER_NAMES, FILTER_MAP } from "../app";

import { useTodoCtx } from "../contexts/todo";

export default function Todo() {
  const { tasks } = useTodoCtx();
  const [filter, setFilter] = useState<TKeyOfFilterMap>("All");

  const filterList = FILTER_NAMES.map((name: TKeyOfFilterMap) => {
    return <FilterButton name={name} key={name} isPressed={filter === name} setFilter={setFilter} />;
  });

  return (
    <div className="todoapp stack-large">
      <h1>Todo</h1>
      <TodoForm />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <TodoList list={tasks.filter(FILTER_MAP[filter])} />
    </div>
  );
}
