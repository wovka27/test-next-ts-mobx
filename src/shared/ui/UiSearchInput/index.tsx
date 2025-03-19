import React from 'react'
import styles from '@/shared/ui/UiSearchInput/ui-search-input.module.scss'

import iconSearch from '@/shared/ui/UiSearchInput/assets/icon_search.svg'
import Image from 'next/image'
import Form from 'next/form'
import cn from 'classnames'

interface UiSearchInputProps {
  placeholder?: string
  value: string
  onChange?: (value: string) => void
  onSearch?: () => Promise<void>
}

const UiSearchInput: React.FC<UiSearchInputProps> = ({
  placeholder = 'Поиск бренда, товара, категории...',
  value = '',
  onChange
}) => {
  return (
    <Form action="" className={cn([styles.searchInput, 'search-input'])}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button className={styles.button} type="submit">
        <Image src={iconSearch} className={styles.button__img} alt="Иконка поиска" width={20} height={20} />
      </button>
    </Form>
  )
}

export default UiSearchInput
