'use server'

import React from 'react'
import cn from 'classnames'

import AddToCart from '@/features/add-to-cart'

import { fetchGetProduct } from '@/entities/product/api/fetchGetProduct'

import { formatMoney } from '@/shared/lib/helpers/formatMoney'
import UiGallery from '@/shared/ui/UiGallery'

import styles from '@/app/product/[id]/product-item-page.module.scss'
import GoBack from '@/features/GoBack'

interface IProductItemPageProps {
  params: Promise<{ id: string }>
}

const ProductItemPage: React.FC<IProductItemPageProps> = async ({ params }) => {
  const { id } = await params
  const response = await fetchGetProduct(parseInt(id))
  return (
    <section className={cn(styles.main)}>
      <GoBack />
      <h2>
        <b>{response.name}</b>
      </h2>
      <UiGallery images={response.images} />
      <div className={cn([styles.info, 'info-container'])}>
        <p style={{ lineHeight: '128%', fontSize: 30 }}>
          <b>{formatMoney(response.prices[0].price)}&nbsp;₽</b>&nbsp;<span>за шт.</span>
        </p>
        <AddToCart
          item={{
            ...response,
            price: response.prices[0].price,
            quantity: 1
          }}
          price={response.prices[0].price}
        />
      </div>
      <article className={styles.description}>
        <h3>Описание</h3>
        {response.description}
      </article>
    </section>
  )
}

export default ProductItemPage
