'use client'
import React from 'react'
import cn from 'classnames'
import orderStore from '@/entities/order/order.store'
import OrderHistoryListItem from '@/entities/order/ui/OrderHistoryListItem'

import styles from '@/app/order-history/order-history-page.module.scss'

const OrderHistoryPage: React.FC = () => {
  const {orders} = orderStore

  return (
    <section className="section-container">
      <h2><b>История заказов</b></h2>
      <div className={cn(styles.main)}>
        {orders.map((order) => (
          <OrderHistoryListItem key={order.id} data={order} />
        ))}
      </div>
    </section>
  )
}

export default OrderHistoryPage