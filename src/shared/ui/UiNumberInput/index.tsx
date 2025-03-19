import React from 'react'

import styles from '@/shared/ui/UiNumberInput/ui-number-input.module.scss'
import cn from 'classnames'

interface IUiNumberInputProps {
  value: number
  onChange?: (value: number) => void
  primary?: boolean
  increase?: () => void
  decrease?: () => void
}

const UiNumberInput: React.FC<IUiNumberInputProps> = ({ onChange, value, primary, increase, decrease }) => {
  return (
    <div className={cn([styles.wrapper, { [styles.primary]: primary }])}>
      <button
        className={styles.button}
        onClick={() => (decrease ?? onChange)?.(Math.max(0, value - 1))}
        aria-label="Decrease"
      >
        <svg
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            id="Icon/20/Minus"
            rx="0.000000"
            width="19.000000"
            height="19.000000"
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <path
            id="Vector"
            d="M6 10L14 10"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <span className={styles.value}>{value}</span>
      <button className={styles.button} onClick={() => (increase ?? onChange)?.(value + 1)} aria-label="Increase">
        <svg
          width="20.000000"
          height="20.000000"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            id="Icon/20/Plus"
            rx="0.000000"
            width="19.000000"
            height="19.000000"
            transform="translate(0.500000 0.500000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <path
            id="Vector"
            d="M10 6L10 14"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M6 10L14 10"
            stroke="#AEC2EA"
            strokeOpacity="1.000000"
            strokeWidth="1.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default UiNumberInput
