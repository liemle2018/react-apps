export interface ISearchBar {
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (value: string) => void
  onInStockOnlyChange: () => void
}
