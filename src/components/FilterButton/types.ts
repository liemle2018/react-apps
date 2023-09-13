import { Dispatch, SetStateAction } from 'react'
import { IFilterMap, TKeyOfFilterMap } from '../../app/types'

export interface IFilterButton {
  name: keyof IFilterMap
  isPressed: boolean
  setFilter: Dispatch<SetStateAction<TKeyOfFilterMap>>
}
