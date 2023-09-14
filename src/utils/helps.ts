import { TFindItemById } from '.'

export function findItemById<T>(item: TFindItemById<T>, id: string) {
  return item.id === id
}
