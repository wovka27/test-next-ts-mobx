import React from 'react'

import FooterInfoBlock from '@/widgets/footer/ui/FooterInfoBlock/index.'

import styles from '@/widgets/footer/ui/footer.module.scss'

import facebook from '@/widgets/footer/assets/icon_facebook.svg'
import vk from '@/widgets/footer/assets/icon_vk.svg'
import instagram from '@/widgets/footer/assets/icon_instagram.svg'
import googlePlay from '@/widgets/footer/assets/icon_googlePlay.svg'
import appStore from '@/widgets/footer/assets/icon_appStore.svg'

const Footer: React.FC = () => {
  const socialList = [facebook, vk, instagram]
  const marketList = [googlePlay, appStore]
  const policyList = ['Правовая информация', 'Политика конфиденциальности']
  const infoBlocks = [
    { title: 'Присоединяйтесь к нам', list: socialList },
    { title: 'Устанавливайте приложение', list: marketList, gap: 20 }
  ]

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__info}>
        <p style={{ fontSize: 40.8, fontWeight: 700, lineHeight: '50px' }}>React</p>
        {infoBlocks.map((item, i) => (
          <FooterInfoBlock {...item} key={i} />
        ))}
      </div>
      <div className={styles.Footer__policy}>
        <span>&copy;&nbsp;Sionic</span>
        {policyList.map((text) => (
          <span key={text} style={{ cursor: 'pointer' }} className="link-hover">
            {text}
          </span>
        ))}
      </div>
    </footer>
  )
}

export default Footer
