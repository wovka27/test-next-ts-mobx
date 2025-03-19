import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { formatMoney } from '@/shared/lib/helpers/formatMoney'

import AddToCart from '@/features/add-to-cart'

import styles from '@/entities/product/ui/ProductItem/product-item.module.scss'
import no_photo from '@/entities/product/assets/no_photo.jpg'
import { type Product, type ProductImage, type ProductVariation } from '@/entities/product/product.model'
import UiCardGallery from '@/shared/ui/UiCardGallery'


interface IProductItemProps extends Product {
  images: ProductImage[]
  prices: ProductVariation[]
}

const ProductItem: React.FC<IProductItemProps> = ({ name, images, prices, id, description }) => {

  const price = prices.length ? `от ${formatMoney(prices[0].price)} ₽` : ''
  const imgs = images.map(image => image.image_url)
  return (
    <article className={styles.ProductItem}>
      <div className={styles.images}>
        {images.length ? (
          <UiCardGallery images={imgs} />
        ) : (
          <Image src={no_photo} alt="нет фото" />
        )}
      </div>
      <Link href={`/product/${id}`} className={cn([styles.title, 'link-hover'])}>
        {name}
      </Link>
      <p>{price}</p>
      <AddToCart item={{ name, id, prices, price: prices[0].price, images, description, quantity: 1 }} />
    </article>
  )
}

export default React.memo(ProductItem)
