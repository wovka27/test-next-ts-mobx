'use client'
import React, { useRef, useState } from 'react'
import styles from '@/shared/ui/UiDateInput/ui-date-input.module.scss'


interface UiDateInputProps {
  type: 'date' | 'time'
  label: string
  value?: string
  onChange: (value: string) => void
}

const UiDateInput: React.FC<UiDateInputProps> = ({ type, label, value, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [displayValue, setDisplayValue] = useState(value || '')

  const handleClick = () => {
    if (inputRef.current) inputRef.current.showPicker?.()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <span className={styles.label}>{displayValue || label}</span>
      <input ref={inputRef} type={type} className={styles.hiddenInput} value={displayValue} onChange={handleChange} />
    </div>
  )
}

export default UiDateInput
