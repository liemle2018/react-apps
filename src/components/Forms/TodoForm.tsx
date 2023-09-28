import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { useTodoCtx } from "../../contexts/todo";

function TodoForm() {
  const [name, setName] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { dispatch } = useTodoCtx();

  function changeHandle(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
  }

  function submitHandle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nameTrimmed = name.trim();

    setName("");
    // nameRef?.current?.focus();

    if (nameTrimmed.length === 0) {
      return;
    }

    dispatch({ type: "added", name: nameTrimmed });
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
