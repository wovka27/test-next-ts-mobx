
import { type CartItem } from '@/entities/cart/cart.model'

export interface IOrder {
  id?: number
  order_id?: string
  name: string
  price: number
  date: string
  stock: number
  address: string
  items: CartItem[]
  phone: string
}
