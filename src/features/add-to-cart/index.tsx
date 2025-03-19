'use client'

import React, { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import cartStore from '@/entities/cart/cart.store'
import { type CartItem } from '@/entities/cart/cart.model'

import UiButton from '@/shared/ui/UiButton'
import UiNumberInput from '@/shared/ui/UiNumberInput'
import { formatMoney } from '@/shared/lib/helpers/formatMoney'

interface IAddToCartProps {
  item: CartItem
  price?: number
}

const AddToCart: React.FC<IAddToCartProps> = observer(({ item, price }) => {
  const text = useMemo(() => (price ? `Добавить в корзину за ${formatMoney(price)} ₽` : 'Добавить в корзину'), [price])

  const { addToCart, cartItemsIds, cart, removeFromCart } = cartStore

  const is_include = cartItemsIds.includes(item.id)

  const add = () => addToCart(item)

  if (is_include) {
    const cartItem = cart.find((itm) => itm.id === item.id)

    return (
      <UiNumberInput
        increase={add}
        decrease={() => removeFromCart(item.id)}
        primary
        value={cartItem!.quantity}
        onChange={add}
      />
    )
  }

  return <UiButton onClick={add}>{text}</UiButton>
})

export default AddToCart
