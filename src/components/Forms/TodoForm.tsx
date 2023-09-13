import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { ITodoForm } from "./types";

function TodoForm({ addTask }: ITodoForm) {
  const [name, setName] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);

  function changeHandle(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
  }

  function submitHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nameTrimmed = name.trim();

    if (nameTrimmed.length === 0) {
      setName("");
      nameRef.current?.focus();
      return;
    }

    addTask(nameTrimmed);
    nameRef.current?.focus();
    setName("");
  }

  return (
    <form onSubmit={submitHandle}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        ref={nameRef}
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={changeHandle}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
