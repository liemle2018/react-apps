import ProductRow from "../ProductRow";
import { IProduct, IProductTable } from "./types";
import ProductCategoryRow from "../ProductCategoryRow";
import { ReactElement } from "react";

export default function ProductTable({ products }: IProductTable) {
  const rows: ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product: IProduct) => {
    const { name, category } = product;

    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={category} />);
    }
    rows.push(<ProductRow product={product} key={name} />);
    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
