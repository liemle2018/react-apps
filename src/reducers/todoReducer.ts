import { ulid } from 'ulid'

import { ITodo } from '../components/TodoItem'
import { TTodoAction } from '../contexts/todo'

export function tasksReducer(tasks: ITodo[], action: TTodoAction) {
  switch (action.type) {
    case 'added': {
      const id = `todo-${ulid()}`
      const newTask: ITodo = {
        id,
        name: action.name,
        completed: false,
      }
      return [...tasks, newTask]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      return tasks
    }
  }
}
