import { IProductCategoryRow } from "./types";

export default function ProductCategoryRow({ category }: IProductCategoryRow) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
