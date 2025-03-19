import React from 'react'
import cn from 'classnames'

import styles from '@/entities/order/ui/OrderHistoryDetailListItem/order-history-detail-list-item.module.scss'
import { type IOrder } from '@/entities/order/order.model'
import no_photo from '@/entities/product/assets/no_photo.jpg'
import Image from 'next/image'

interface IOrderHistoryDetailListItemProps {
  data: IOrder['items'][number]
}

const OrderHistoryDetailListItem: React.FC<IOrderHistoryDetailListItemProps> = ({ data }) => {
  return (
    <article className={cn([styles.main])}>
      <div className={cn([styles.img])}>
        {data.images.length ? (
          <img src={data.images[0]?.image_url ?? ''} alt="picture" />
        ) : (
          <Image src={no_photo} alt="нет фото" />
        )}
      </div>
      <div className={cn([styles.info])}>
        <p className={cn([styles.name])}>{data.name}</p>
        <p className={cn([styles.price])}><b>{data.prices[0].price}&nbsp;₽/шт.</b></p>
        <p className={cn([styles.stock])}>{data.quantity}/{data.prices[0].stock}&nbsp;шт.</p>
      </div>
    </article>
  )
}

export default OrderHistoryDetailListItem
