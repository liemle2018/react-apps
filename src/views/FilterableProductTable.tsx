import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";

import { PRODUCTS } from "../mockup";
import { useEffect, useState } from "react";
import { IProduct } from "../components/ProductTable/types";

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(
    () => {
      const products = PRODUCTS.filter(
        (product: IProduct): IProduct | undefined => {
          const { name, stocked } = product;
          const isTextMatched = name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1;

          if (isTextMatched && (!inStockOnly || (inStockOnly && !stocked))) return product;

          return undefined;
        }
      );

      setProducts(products);
    },
    [filterText, inStockOnly]
  );

  return (
    <div className="filter-product-table">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={() => setInStockOnly((prev: boolean) => !prev)}
      />
      <ProductTable products={products} />
    </div>
  );
}
