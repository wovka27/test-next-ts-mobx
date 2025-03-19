'use client'

import React from 'react'

import styles from '@/entities/order/ui/OrderHistoryListItem/order-history-list-item.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { IOrder } from '@/entities/order/order.model'
import { formatMoney } from '@/shared/lib/helpers/formatMoney'
import { clipboardWriteText } from '@/shared/lib/clipboardWriteText'

interface IOrderHistoryListItemProps {
  data: IOrder
}

const OrderHistoryListItem: React.FC<IOrderHistoryListItemProps> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const fieldList = [
    { prop: 'Статус заказа', value: 'Оплачен/Завершён' },
    { prop: 'Номер заказа', value: data.order_id ?? '', copy: true },
    { prop: 'Кол-во товаров', value: data.stock + ' шт.' },
    { prop: 'Стоимость заказа', value: formatMoney(data.price) + ' ₽' },
    { prop: 'Адрес доставки', value: data.address }
  ]

  return (
    <article className={cn([styles.main, { [styles.is_open]: isOpen }])}>
      <div className={cn([styles.header])}>
        <div className={cn([styles.circle])}></div>
        <h3>Заказ</h3>
        <div className={cn([styles.headerInfo])}>
          <p>{data.date}</p>
          <Link href={`/order-history/${data.id}`} className={cn('link-hover')}>
            подробнее
          </Link>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className={cn([styles.chevron])}>
          <svg
            width="20.000000"
            height="20.000000"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip2_3060">
                <rect
                  id="Icon/20/ chevron-up"
                  rx="0.000000"
                  width="19.000000"
                  height="19.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <rect
              id="Icon/20/ chevron-up"
              rx="0.000000"
              width="19.000000"
              height="19.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <g clipPath="url(#clip2_3060)">
              <path
                id="Vector"
                d="M4 13L10 7L16 13"
                stroke="#AEC2EA"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={cn([styles.body])}>
        <div className={cn([styles.content])}>
          {fieldList.map((item, i) => (
            <ContentField key={i} {...item} />
          ))}
        </div>
      </div>
    </article>
  )
}

const ContentField: React.FC<{ prop: string; value: string; copy?: boolean }> = ({ prop, value, copy }) => {
  return (
    <div className={cn(styles.contentField)}>
      <p>{prop}</p>
      <p onClick={() => copy && clipboardWriteText(value)} className={cn([{ [styles.copy]: copy }])}>
        {value}
        {copy && (
          <svg
            width="15.000000"
            height="15.000000"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              id="Icon/20/Copy"
              rx="0.000000"
              width="14.000000"
              height="14.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <path
              id="Path"
              d="M3.12 13.12C2.43 13.12 1.87 12.56 1.87 11.87L1.87 5.62C1.87 4.93 2.43 4.37 3.12 4.37L9.37 4.37C10.06 4.37 10.62 4.93 10.62 5.62L10.62 11.87C10.62 12.56 10.06 13.12 9.37 13.12L3.12 13.12Z"
              stroke="#2967FF"
              strokeOpacity="1.000000"
              strokeWidth="1.000000"
              strokeLinejoin="round"
            />
            <path
              id="Path"
              d="M4.37 4.37L4.37 3.12C4.37 2.43 4.93 1.87 5.62 1.87L11.87 1.87C12.56 1.87 13.12 2.43 13.12 3.12L13.12 9.37C13.12 10.06 12.56 10.62 11.87 10.62L10.62 10.62"
              stroke="#2967FF"
              strokeOpacity="1.000000"
              strokeWidth="1.000000"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        )}
      </p>
    </div>
  )
}

export default OrderHistoryListItem
