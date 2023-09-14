import { IProductRow } from "../ProductTable/types";

export default function ProductRow({ product }: IProductRow) {
  const { name, stocked, price } = product;
  const nameStyled = stocked ? name : <span style={{ color: "red" }}>{name}</span>;

  return (
    <tr>
      <td>{nameStyled}</td>
      <td>{price}</td>
    </tr>
  );
}
