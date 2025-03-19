'use client'
import React, { type PropsWithChildren } from 'react'
import { ToastContainer } from 'react-toastify'
import { Raleway } from 'next/font/google'

import Footer from '@/widgets/footer/ui'
import Header from '@/widgets/header/ui'
import BannerFree from '@/widgets/banners/BannerFree'

import '@/app/globals.css'

import 'react-loading-skeleton/dist/skeleton.css'

import styles from '@/app/page.module.scss'
import cartStore from '@/entities/cart/cart.store'

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] })

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const {loadCart} = cartStore

  React.useEffect(loadCart, [])

  return (
    <html lang="ru" className={raleway.className}>
      <body>
        <div className={styles.container}>
          <Header />
          <aside className={styles.container__banners}>
            <BannerFree />
            <BannerFree />
            <BannerFree />
          </aside>
          <main className={styles.container__main}>{children}</main>
        </div>
        <Footer />
      <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
