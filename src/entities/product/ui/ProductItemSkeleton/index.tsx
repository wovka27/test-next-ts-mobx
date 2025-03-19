import React from 'react'

import styles from '@/entities/product/ui/ProductItemSkeleton/product-item-skeleton.module.scss'
import Skeleton from 'react-loading-skeleton'

const ProductItemSkeleton: React.FC = () => {
  return (
    <article className={styles.ProductItemSkeleton}>
      <Skeleton borderRadius={20} height={153} />
      <div className={styles.title}>
        <Skeleton borderRadius={20} height={48} />
      </div>
      <p>
        <Skeleton borderRadius={20} height={26} />
      </p>
      <Skeleton borderRadius={20} height={50} />
    </article>
  )
}

export default ProductItemSkeleton
