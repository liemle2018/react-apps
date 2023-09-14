import { useState } from "react";
import { ulid } from "ulid";
import { useImmer } from "use-immer";

import { ITodo } from "../components/TodoItem";
import { TodoForm } from "../components/Forms";
import TodoList from "../components/TodoList/TodoList";
import { FilterButton } from "../components/FilterButton";
import { TKeyOfFilterMap, FILTER_NAMES, FILTER_MAP } from "../app";

import { findItemById } from "../utils";

export default function Todo() {
  const [tasks, setTasks] = useImmer<ITodo[]>([]);
  const [filter, setFilter] = useState<TKeyOfFilterMap>("All");

  function addTask(name: string) {
    const id = `todo-${ulid()}`;
    const newTask: ITodo = {
      id,
      name,
      completed: false
    };

    setTasks((prevTasks: ITodo[]) => [...prevTasks, newTask]);
  }

  function toggleTaskCompleted(id: string) {
    setTasks(draftTasks => {
      const updatedTask = draftTasks.find(task => findItemById(task, id));
      if (updatedTask) updatedTask.completed = !updatedTask.completed;
    });
  }

  function deleteTask(id: string) {
    setTasks(draftTasks => draftTasks.filter((task: ITodo) => task.id !== id));
  }

  function editTask(id: string, name: string) {
    setTasks(draftTasks => {
      const updatedTask = draftTasks.find(task => findItemById(task, id));
      if (updatedTask) updatedTask.name = name;
    });
  }

  const filterList = FILTER_NAMES.map((name: TKeyOfFilterMap) => {
    return <FilterButton name={name} key={name} isPressed={filter === name} setFilter={setFilter} />;
  });

  return (
    <div className="todoapp stack-large">
      <h1>Todo</h1>
      <TodoForm addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
      <TodoList
        list={tasks.filter(FILTER_MAP[filter])}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}
