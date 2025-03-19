import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import beni from '@/widgets/header/ui/HeaderUser/assets/beni.jpg'

import styles from '@/widgets/header/ui/HeaderUser/header-user.module.scss'

const HeaderUser: React.FC = () => {
  return (
    <Link className={styles.HeaderUser} href="#!">
      <Image className={styles.HeaderUser__img} src={beni} alt="Аватар" width={50} height={50} />
    </Link>
  )
}

export default HeaderUser
