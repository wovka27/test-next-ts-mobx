import React from 'react'
import Image from 'next/image'

import styles from '@/widgets/footer/ui/FooterInfoBlock/footer-info-block.module.scss'

interface IFooterInfoBlockProps {
  title: string
  list: string[]
  gap?: number
}

const FooterInfoBlock: React.FC<IFooterInfoBlockProps> = ({ gap = 16, list, title }) => {
  return (
    <div className={styles.FooterInfoBlock}>
      <p>{title}</p>
      <ul className={styles.FooterInfoBlock__list} style={{ gap }}>
        {list.map((name, i) => (
          <li style={{ cursor: 'pointer' }} key={i}>
            <Image src={name} alt="Иконка" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterInfoBlock
