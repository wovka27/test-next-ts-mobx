import { type ProductVariation } from '@/entities/product/product.model'
import api from '@/shared/api/axios'

export const getProductVariations = async (ids: number[]) => {
  const response = await api.get<ProductVariation[]>(
    `ProductVariations?filter={"product_id":${JSON.stringify(ids)}}`
  )

  return response.data
}
