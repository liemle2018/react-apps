export interface ITodo {
  id: string
  name: string
  completed: boolean
}

export interface ITodoItem extends ITodo {
  toggleTaskCompleted: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (id: string, name: string) => void
}
