'use client'

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import UiSearchInput from '@/shared/ui/UiSearchInput'

import styles from '@/widgets/header/ui/header.module.scss'
import HeaderCartButton from '@/widgets/header/ui/HeaderCartButton'
import HeaderUser from '@/widgets/header/ui/HeaderUser'

const Header: React.FC = () => {
  const [value, setValue] = React.useState('')
  return (
    <header className={cn([styles.Header, 'section-container'])}>
      <div className={styles.Header__block}>
        <div className={cn([styles.content])}>
          <Link href="/" style={{ fontSize: 37, fontWeight: 700, lineHeight: '50px' }}>React</Link>
          <Link className={cn([styles.Header__history, 'link-hover'])} href="/order-history">
            История заказов
          </Link>
        </div>
      </div>
      <div className={styles.Header__block}>
        <UiSearchInput value={value} onChange={setValue} />
        <div className={cn([styles.content])}>
          <HeaderCartButton />
          <HeaderUser />
        </div>
      </div>
    </header>
  )
}

export default Header
