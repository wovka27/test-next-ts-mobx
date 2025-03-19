'use client'
import React from 'react'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import styles from '@/widgets/header/ui/HeaderCartButton/header-cart-button.module.scss'
import cartStore from '@/entities/cart/cart.store'


const HeaderCartButton: React.FC = observer(() => {
  const {totalItems} = cartStore
  return (
    <Link href="/cart" className={styles.headerCartButton}>
      <svg
        width="18.741943"
        height="17.935547"
        viewBox="0 0 18.7419 17.9355"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="Vector"
          d="M6.95 17.43C6.5 17.43 6.14 17.07 6.14 16.62C6.14 16.18 6.5 15.82 6.95 15.82C7.39 15.82 7.75 16.18 7.75 16.62C7.75 17.07 7.39 17.43 6.95 17.43Z"
          stroke="#727280"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M15.82 17.43C15.37 17.43 15.01 17.07 15.01 16.62C15.01 16.18 15.37 15.82 15.82 15.82C16.26 15.82 16.62 16.18 16.62 16.62C16.62 17.07 16.26 17.43 15.82 17.43Z"
          stroke="#727280"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M0.5 0.5L3.72 0.5L5.88 11.29C5.96 11.66 6.16 12 6.45 12.24C6.75 12.47 7.12 12.6 7.5 12.59L15.33 12.59C15.71 12.6 16.08 12.47 16.38 12.24C16.67 12 16.87 11.66 16.95 11.29L18.24 4.53L4.53 4.53"
          stroke="#727280"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </Link>
  )
})

export default HeaderCartButton
