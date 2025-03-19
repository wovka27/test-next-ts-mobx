import React from 'react'
import cn from 'classnames'

import styles from '@/shared/ui/UiInput/ui-input.module.scss'
import { formatPhone } from '@/shared/lib/helpers/formatPhone'

interface IUiInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onInputChange: (value: string) => void
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'] | 'phone' | 'number'
}

const UiInput: React.FC<React.PropsWithChildren<IUiInputProps>> = ({
  onInputChange,
  placeholder = 'Введите',
  children,
  type,
  ...rest
}) => {
  const onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'] = (event) => {
    const { value } = event.target
    if (type === 'phone') onInputChange(formatPhone(value))
    else onInputChange(value)
  }

  return (
    <div className={cn([styles.main, 'ui-input'])}>
      {children}
      <input type="text" onChange={onChange} placeholder={placeholder} {...rest} />
    </div>
  )
}

export default UiInput
