export interface IProduct {
  category: string
  price: string
  stocked: boolean
  name: string
}

export interface IProductRow {
  product: IProduct
}

export interface IProductTable {
  products: IProduct[]
}
