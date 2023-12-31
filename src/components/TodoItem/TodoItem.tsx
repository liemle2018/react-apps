import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { usePrevious } from "../../utils";
import { ITodoTask } from "./types";
import { useTodoCtx } from "../../contexts/todo";

function TodoItem({ task }: ITodoTask) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const { id, name, completed } = task;

  const { dispatch } = useTodoCtx();

  const editFieldRef = useRef<HTMLInputElement | null>(null);
  const editButtonRef = useRef<HTMLButtonElement | null>(null);

  const wasEditing = usePrevious(isEditing);

  useEffect(
    () => {
      if (!wasEditing && isEditing && editFieldRef.current) editFieldRef.current.focus();
      if (wasEditing && !isEditing && editButtonRef.current) editButtonRef.current.focus();
    },
    [wasEditing, isEditing]
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNewName(e.target.value);
  }

  function handleCancel() {
    setNewName(name);
    setIsEditing(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsEditing(false);
    dispatch({
      type: "changed",
      task: { ...task, name: newName }
    });
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input ref={editFieldRef} id={id} className="todo-text" type="text" value={newName} onChange={handleChange} />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={handleCancel}>
          Cancel
          <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() =>
            dispatch({
              type: "changed",
              task: { ...task, completed: !completed }
            })
          }
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setIsEditing(true)} ref={editButtonRef}>
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() =>
            dispatch({
              type: "deleted",
              id
            })
          }
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default TodoItem;
