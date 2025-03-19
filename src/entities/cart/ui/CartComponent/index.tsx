'use client'

import React from 'react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import styles from '@/entities/cart/ui/CartComponent/cart-component.module.scss'
import cartStore from '@/entities/cart/cart.store'

import cart_empty from '@/entities/cart/assets/icon_empty_cart.svg'
import CartItem from '@/entities/cart/ui/CartItem'
import { formatMoney } from '@/shared/lib/helpers/formatMoney'
import UiButton from '@/shared/ui/UiButton'
import { useRouter } from 'next/navigation'
import cn from 'classnames'

const CartPage: React.FC = observer(() => {
  const { cart, clearCart, removeFromCart, addToCart, totalPrice } = cartStore
  const router = useRouter()

  if (!cart.length) {
    return (
      <div className={styles.empty}>
        <Image src={cart_empty} alt="Пустая корзина" />
      </div>
    )
  }

  return (
    <section className={cn([styles.main, 'section-container'])}>
      <div className={styles.header}>
        <h2>
          <b>Корзина</b>
        </h2>
        <button onClick={clearCart}>Очистить корзину</button>
      </div>

      <div className={styles.list}>
        <div className={styles.info}>
          <div className={styles.cartSum}>
            <p>Стоимость корзины</p>
            <p>
              <b>{formatMoney(totalPrice)} ₽</b>
            </p>
          </div>
          <UiButton size="large" onClick={() => router.push('/checkout')}>Оформить</UiButton>
        </div>
        {cart.map((item) => (
          <CartItem add={addToCart} key={item.id} data={item} remove={removeFromCart} />
        ))}
      </div>
    </section>
  )
})

export default CartPage
