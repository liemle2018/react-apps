import { ITodo } from '../TodoItem'

export interface ITodoList {
  list: ITodo[]
  toggleTaskCompleted: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (id: string, name: string) => void
}
