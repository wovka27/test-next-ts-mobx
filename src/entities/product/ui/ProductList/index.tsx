'use client'

import React from 'react'
import { observer } from 'mobx-react-lite'
import cn from 'classnames'

import ProductItem from '@/entities/product/ui/ProductItem'
import ProductStore from '@/entities/product/product.store'
import styles from '@/entities/product/ui/ProductList/product-list.module.scss'
import ProductItemSkeleton from '@/entities/product/ui/ProductItemSkeleton'

import { useObserver } from '@/shared/hooks/useObserver'

const ProductList: React.FC = observer(() => {
  const [productStore] = React.useState(() => new ProductStore())

  const nodeRef = useObserver((v) => {
    if (v) productStore.loadNextBatch()
  })

  React.useEffect(() => {
    productStore.loadProducts(0, 24)
  }, [])

  return (
    <div className={cn([styles.ProductList, 'section-container'])}>
      {productStore.products.map((product, i) => (
        <ProductItem key={product.id + i + Math.random()} {...product} />
      ))}
      {productStore.is_loading && Array.from({ length: 15 }).map((_, i) => <ProductItemSkeleton key={i} />)}
      {productStore.has_more && <span ref={nodeRef}></span>}
    </div>
  )
})

export default ProductList
