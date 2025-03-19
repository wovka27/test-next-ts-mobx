export interface Product {
  id: number
  category_id: number
  description: string
  name: string
}

export interface ProductVariation {
  product_id: number
  price: number
  stock: number
}

export interface ProductImage {
  id: number
  image_name: string
  image_url: string
  product_id: number
}

export interface IProductItem extends Product {
  images: ProductImage[];
  prices: ProductVariation[];
}
