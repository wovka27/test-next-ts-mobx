'use client'

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

import UiNumberInput from '@/shared/ui/UiNumberInput'
import { formatMoney } from '@/shared/lib/helpers/formatMoney'

import { type CartItem } from '@/entities/cart/cart.model'
import styles from '@/entities/cart/ui/CartItem/cart-item.module.scss'
import no_photo from '@/entities/product/assets/no_photo.jpg'



interface ICartItemProps {
  data: CartItem
  remove: (id: number, force?: boolean) => void
  add: (cart: CartItem) => void
}

const CartItem: React.FC<ICartItemProps> = ({data, remove, add}) => {
  return (
    <article className={styles.main}>
      <div className={styles.mainWrap}>
        <div className={styles.img}>
          {data.images.length ? (
            <img src={data.images[0].image_url} alt="picture" />
          ) : (
            <Image src={no_photo} alt="нет фото" />
          )}
        </div>
        <Link href={`/product/${data.id}`} className={cn([styles.name, 'link-hover'])}>
          <p>{data.name}</p>
        </Link>
      </div>

      <div className={styles.mainWrap}>
        <div className={cn([styles.stock])}>
          <UiNumberInput value={data.quantity} increase={() => add(data)} decrease={() => remove(data.id)} />
        </div>
        <p><b>{formatMoney(data.price)}&nbsp;₽</b></p>
      </div>
      <button onClick={() => remove(data.id, true)}>
        <svg
          width="14.000000"
          height="15.000000"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="Vector"
            d="M0.5 3.16L1.94 3.16L13.5 3.16"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M12.13 13.1C12.13 13.47 11.97 13.82 11.7 14.09C11.42 14.35 11.05 14.5 10.66 14.5L3.33 14.5C2.94 14.5 2.57 14.35 2.29 14.09C2.02 13.82 1.86 13.47 1.86 13.1L1.86 3.3L12.13 3.3L12.13 13.1ZM4.06 3.3L4.06 1.9C4.06 1.52 4.22 1.17 4.49 0.91C4.77 0.64 5.14 0.5 5.53 0.5L8.46 0.5C8.85 0.5 9.22 0.64 9.5 0.91C9.77 1.17 9.93 1.52 9.93 1.9L9.93 3.3"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M5.28 6.5L5.28 11.16"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M8.71 6.5L8.71 11.16"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </article>
  )
}

export default CartItem
