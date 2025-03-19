import api from '@/shared/api/axios'
import { type IProductItem, type Product } from '@/entities/product/product.model'
import { getImages } from '@/entities/product/api/getImages'
import { getProductVariations } from '@/entities/product/api/getProductsVariation'

export const fetchGetProduct = async (id: number): Promise<IProductItem> => {
  const response = await api.get<Product>(`Products/${id}`);
  const [images, prices] = await Promise.all([getImages([response.data.id]), getProductVariations([response.data.id])])

  return { ...response.data, images, prices };
}