import { ITodo } from '../components/TodoItem'

export interface IFilterMap {
  All: () => boolean
  Active: (task: ITodo) => boolean
  Completed: (task: ITodo) => boolean
}

export type TKeyOfFilterMap = keyof IFilterMap
