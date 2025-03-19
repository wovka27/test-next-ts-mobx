import React from 'react'
import cn from 'classnames'

import styles from '@/shared/ui/UiFromField/ui-form-field.module.scss'

interface IUiFormFieldProps  {
  title: string
}

const UiFormField: React.FC<React.PropsWithChildren<IUiFormFieldProps>> = ({ children, title }) => {
  return (
    <label className={cn([styles.main])}>
      <p><b>{title}</b></p>
      {children}
    </label>
  )
}

export default UiFormField
