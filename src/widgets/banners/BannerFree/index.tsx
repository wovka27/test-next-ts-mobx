import UiButton from '@/shared/ui/UiButton'
import React from 'react'

import styles from '@/widgets/banners/BannerFree/banner-free.module.scss'
import pic from '@/widgets/banners/BannerFree/assets/pic.svg'

import Image from 'next/image'

const BannerFree: React.FC = () => {
  return (
    <div className={styles.BannerFree}>
      <Image className={styles.pic} src={pic} alt={'Banner Free'} />

      <p>Получай товары<br />БЕСПЛАТНО!</p>
      <UiButton>Узнать подробнее</UiButton>
    </div>
  )
}

export default BannerFree
