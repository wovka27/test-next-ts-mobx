'use client'

import React from 'react'
import cn from 'classnames'

import styles from '@/shared/ui/UiToggleButton/ui-toggle-button.module.scss'
import { type ICategory } from '@/entities/category/category.model'

interface UiToggleButtonProps {
  item: ICategory
  onCLick: (item: ICategory) => void
  isActive: boolean
}

const UiToggleButton: React.FC<React.PropsWithChildren<UiToggleButtonProps>> = ({ children, onCLick, item, isActive }) => {


  const handleClick = () => {
    onCLick(item)
  }

  return (
    <button
      onClick={handleClick}
      className={cn([styles.UiToggleButton, { [styles.inline]: isActive }])}
    >
      {children}
    </button>
  )
}

export default React.memo(UiToggleButton)
