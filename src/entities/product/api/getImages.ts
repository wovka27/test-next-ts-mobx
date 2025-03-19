import { type ProductImage } from '@/entities/product/product.model'
import api from '@/shared/api/axios'

export const getImages = async (ids: number[]) => {
  const response = await api.get<ProductImage[]>(
    `ProductImages?filter={"product_id":${JSON.stringify(ids)}}`
  )

  return response.data
}
