import React from 'react'
import cn from 'classnames'

import styles from '@/shared/ui/UiButton/ui-button.module.scss'

interface UiButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  inline?: boolean
  size?: 'small' | 'medium' | 'large'
}

const UiButton: React.FC<React.PropsWithChildren<UiButtonProps>> = ({ children, inline, size = 'small', ...rest }) => {
  return (
    <button  {...rest} className={cn([styles.main, styles[size], { [styles.inline]: inline }])}>
      {children}
    </button>
  )
}

export default UiButton
