import { ChangeEvent } from "react";
import { ISearchBar } from "./";

export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }: ISearchBar) {
  function changeHandle(e: ChangeEvent<HTMLInputElement>) {
    onFilterTextChange(e.target.value);
  }

  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} onChange={changeHandle} />
      <label>
        <input type="checkbox" defaultChecked={inStockOnly} onChange={onInStockOnlyChange} /> Only show products in stock
      </label>
    </form>
  );
}
