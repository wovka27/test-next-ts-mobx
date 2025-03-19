'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'
import cn from 'classnames'

import styles from '@/features/checkout/checkout-info.module.scss'
import cartStore from '@/entities/cart/cart.store'
import { formatMoney } from '@/shared/lib/helpers/formatMoney'
import UiButton from '@/shared/ui/UiButton'

const CheckoutInfo: React.FC = observer(() => {
  const { totalPrice } = cartStore
  const infoList = [
    {prop: 'Стоимость товаров', value: totalPrice},
    {prop: 'Стоимость доставки', value: 200},
    {prop: 'Итого', value: totalPrice + 200},
  ]
  return (
    <div className={cn([styles.main])}>
      <div className={cn([styles.info, 'info-container'])}>
        <CheckoutInfoFieldList list={infoList} />
      </div>
      <UiButton size="large">Сделать заказ</UiButton>
    </div>
  )
})

const CheckoutInfoFieldList: React.FC<{ list: { prop: string; value: number }[] }> = ({ list }) => {
  return list.map((item, index) => (
    <p key={index}>
      {item.prop}: <span>{formatMoney(item.value)}&nbsp;₽</span>
    </p>
  ))
}

export default CheckoutInfo
