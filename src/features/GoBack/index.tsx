'use client'
import styles from '@/features/GoBack/go-back.module.scss'
import { useRouter } from 'next/navigation'

const GoBack: React.FC = () => {
  const router = useRouter()
  return (
    <div aria-label="button" onClick={router.back} className={styles.main}>
      <svg
        width="20.000000"
        height="20.000000"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="clip14409_1660">
            <rect
              id="Icon/20/chevron-left"
              rx="0.000000"
              width="19.000000"
              height="19.000000"
              transform="translate(0.500000 0.500000)"
              fill="white"
              fillOpacity="0"
            />
          </clipPath>
        </defs>
        <rect
          id="Icon/20/chevron-left"
          rx="0.000000"
          width="19.000000"
          height="19.000000"
          transform="translate(0.500000 0.500000)"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip14409_1660)">
          <path
            id="Vector"
            d="M13 16L7 10L13 4"
            stroke="#2967FF"
            strokeOpacity="1.000000"
            strokeWidth="1.500000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </svg><span>Назад</span>
    </div>
  )
}

export default GoBack
