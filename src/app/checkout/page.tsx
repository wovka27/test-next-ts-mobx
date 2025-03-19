'use client'
import React from 'react'
import cn from 'classnames'
import UiInput from '@/shared/ui/UiInput'
import UiFormField from '@/shared/ui/UiFromField'

import styles from '@/app/checkout/checkout-page.module.scss'
import CheckoutInfo from '@/features/checkout'
import orderStore from '@/entities/order/order.store'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import cartStore from '@/entities/cart/cart.store'
import UiDateInput from '@/shared/ui/UiDateInput'

const CheckoutPage: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = React.useState({
    address: '',
    name: '',
    phone: '',
    date: '',
    time: ''
  })

  const { addOrder } = orderStore
  const { totalPrice, totalItems, clearCart, cart } = cartStore

  const apply: React.FormEventHandler = (event) => {
    event.preventDefault()
    if (Object.values(formData).some((i) => !i)) return toast.error('Не все поля заполнены', { theme: 'colored' })

    addOrder({
      ...formData,
      items: cart,
      price: totalPrice + 200,
      stock: totalItems,
      date: formData.date.replace(/(\d+)-(\d+)-(\d+)/, '$3-$2-$1')
    })

    router.push('/')

    toast.success('Заказ успешно оформлен', { theme: 'colored' })

    clearCart()
  }

  const onChange = (key: keyof typeof formData) => (value: string) => setFormData((prev) => ({ ...prev, [key]: value }))

  return (
    <section className={cn('section-container')}>
      <h2>Доставка</h2>
      <form className={styles.main} onSubmit={apply}>
        <div className={styles.formInner}>
          <UiFormField title="Когда доставить?">
            <div style={{ display: "flex", gap: "20px", marginBottom: 30 }}>
              <UiDateInput
                type="date"
                label="Выберите дату"
                value={formData.date}
                onChange={onChange('date')}
              />
              <UiDateInput
                type="time"
                label="Выберите время"
                value={formData.time}
                onChange={onChange('time')}
              />
            </div>
          </UiFormField>
          <UiFormField title="Куда доставить?">
            <UiInput placeholder="Введите адрес" value={formData.address} onInputChange={onChange('address')}>
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip2_976">
                    <rect
                      id="Icon/20/navigation"
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
                  id="Icon/20/navigation"
                  rx="0.000000"
                  width="19.000000"
                  height="19.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <g clipPath="url(#clip2_976)">
                  <path
                    id="Vector"
                    d="M16 4L10.31 16L9.05 10.94L4 9.68L16 4Z"
                    stroke="#727280"
                    strokeOpacity="1.000000"
                    strokeWidth="1.000000"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </UiInput>
          </UiFormField>
          <UiFormField title="Имя">
            <UiInput placeholder="Введите Имя" value={formData.name} onInputChange={onChange('name')} />
          </UiFormField>
          <UiFormField title="Телефон">
            <UiInput
              type="phone"
              placeholder="Введите телефон"
              value={formData.phone}
              onInputChange={onChange('phone')}
            />
          </UiFormField>
        </div>
        <CheckoutInfo />
      </form>
    </section>
  )
}

export default CheckoutPage
