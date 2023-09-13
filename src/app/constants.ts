import { ITodo } from '../components/TodoItem'
import { IFilterMap } from './types'

export const FILTER_MAP: IFilterMap = {
  All: () => true,
  Active: (task: ITodo) => !task.completed,
  Completed: (task: ITodo) => task.completed,
}

export const FILTER_NAMES: any = Object.keys(FILTER_MAP)
