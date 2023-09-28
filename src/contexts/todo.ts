import { createContext, useContext } from 'react'

import { ITodo } from '../components/TodoItem'

export interface ITodoProvider {
  tasks: ITodo[]
  dispatch: React.Dispatch<TTodoAction>
}

export type TTodoAction =
  | { type: 'added'; name: string }
  | { type: 'changed'; task: ITodo }
  | { type: 'deleted'; id: string }

export interface TodoReducer {
  tasks: ITodo[]
  action: TTodoAction
}

const TodoContext = createContext<ITodoProvider | null>(null)

export const useTodoCtx = () => {
  const todoContext = useContext(TodoContext)

  if (!todoContext) throw new Error('useTodoCtx must be used within a Provider')

  return todoContext
}

export default TodoContext
