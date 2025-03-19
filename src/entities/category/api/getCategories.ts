import { type ICategory } from '@/entities/category/category.model'
import api from '@/shared/api/axios'

export const getCategories = async (): Promise<ICategory[]> => {
  const response = await api.get<ICategory[]>('Categories')

  return response.data
}