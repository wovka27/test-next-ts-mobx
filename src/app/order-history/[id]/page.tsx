'use client'
import React from 'react'
import cn from 'classnames'

import styles from '@/app/order-history/[id]/order-history-item-page.module.scss'
import GoBack from '@/features/GoBack'
import orderStore from '@/entities/order/order.store'
import { observer } from 'mobx-react-lite'
import { useParams } from 'next/navigation'
import OrderHistoryDetailListItem from '@/entities/order/ui/OrderHistoryDetailListItem/index.'

const OrderHistoryItemPage: React.FC = observer(() => {
  const { orders } = orderStore
  const params = useParams<{ id: string }>()
  const findingOrder = orders.find((order) => order.id === +params.id)

  if (!findingOrder) return null

  return (
    <section className={cn([styles.main, 'section-container'])}>
      <GoBack />
      <h2 style={{ marginBottom: 40, marginTop: 40 }}>Заказ № {findingOrder.order_id}</h2>
      <h3 style={{ marginBottom: 16, fontSize: 20 }}>
        <b>Товары</b>
      </h3>
      <div className={cn(styles.list)}>
        {findingOrder.items.map((item) => (
          <OrderHistoryDetailListItem key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
})

export default OrderHistoryItemPage
