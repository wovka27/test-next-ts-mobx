import { IProductItem } from '@/entities/product/product.model'

export interface CartItem extends Pick<IProductItem, 'images' | 'id' | 'description' | 'name' | 'prices'> {
  quantity: number;
  price: number;
}
