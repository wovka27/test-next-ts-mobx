import { getProducts } from '@/entities/product/api/getProducts'
import { getProductVariations } from '@/entities/product/api/getProductsVariation'
import { getImages } from '@/entities/product/api/getImages'
import { IProductItem, type ProductImage, type ProductVariation } from '@/entities/product/product.model'

export const getProductsItems = async (
  ranges: [number, number],
  filter?: Record<string, unknown>
): Promise<IProductItem[]> => {
  const params = new URLSearchParams({
    range: JSON.stringify(ranges),
    ...(filter && { filter: JSON.stringify(filter) })
  })

  const products = await getProducts(params.toString())

  const products_ids = products.map((product) => product.id)

  const [prices, images] = await Promise.all([getProductVariations(products_ids), getImages(products_ids)])

  const prices_group = Object.groupBy(prices, keySelector)
  const images_group = Object.groupBy(images, keySelector)

  return products.map((product) => ({
    ...product,
    images: images_group[product.id] ?? [],
    prices: prices_group[product.id] ?? []
  }))
}

const keySelector: Parameters<typeof Object.groupBy<number, ProductVariation | ProductImage>>[1] = (item) =>
  item.product_id
