'use client'

import React from 'react'

import styles from '@/shared/ui/UiGallery/ui-gallery.module.scss'
import { ProductImage } from '@/entities/product/product.model'
import cn from 'classnames'

interface IUiGalleryProps {
  images: ProductImage[]
}

const UiGallery: React.FC<IUiGalleryProps> = ({ images }) => {
  const [index, setIndex] = React.useState(0)

  return (
    <div className={styles.main}>
      <div className={styles.detail}>
        <img src={images[index].image_url} alt={images[index].image_name} />
      </div>
      <div className={styles.list}>
        {images.map((image, idx) => (
          <div onClick={() => setIndex(idx)} className={cn(styles.item, { [styles.selected]: idx === index })} key={image.id}>
            <img width={70} height={70} src={image.image_url} alt={image.image_name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UiGallery
