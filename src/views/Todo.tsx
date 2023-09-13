import { useState } from "react";
import { ulid } from "ulid";

import { ITodo } from "../components/TodoItem";
import { TodoForm } from "../components/Forms";
import TodoList from "../components/TodoList/TodoList";
import { FilterButton } from "../components/FilterButton";
import { TKeyOfFilterMap, FILTER_NAMES, FILTER_MAP } from "../app";

export default function Todo() {
  const [tasks, setTasks] = useState<ITodo[]>([]);
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
    updateTask(id, "completed");
  }

  function deleteTask(id: string) {
    const newTasks: ITodo[] = tasks.filter((task: ITodo) => task.id !== id);

    setTasks(newTasks);
  }

  function editTask(id: string, name: string) {
    updateTask(id, "name", name);
  }

  function updateTask(id: string, key: string, value?: string) {
    const newsTasks: ITodo[] = tasks.map((task: ITodo) => {
      if (id === task.id) {
        const updatedTask = { ...task, [key]: key === "completed" ? !task.completed : value };
        return updatedTask;
      }
      return task;
    });

    setTasks(newsTasks);
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
