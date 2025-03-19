import { type Product } from '@/entities/product/product.model'
import api from '@/shared/api/axios'

export const getProducts = async (query: string) => {
  const response = await api.get<Product[]>(`Products?${query}`);

  return response.data;
}