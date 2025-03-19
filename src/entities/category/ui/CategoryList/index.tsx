'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import cn from 'classnames'
import { observer } from 'mobx-react-lite'
import Skeleton from 'react-loading-skeleton'

import UiToggleButton from '@/shared/ui/UiToggleButton'

import categoryStore from '@/entities/category/category.store'

import { type ICategory } from '@/entities/category/category.model'

import styles from '@/entities/category/ui/CategoryList/category-list.module.scss'

const CategoryList: React.FC = observer(() => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { list, loadCategories } = categoryStore

  const click = async (item: ICategory) => {
    const params = new URLSearchParams(searchParams)

    let ids = JSON.parse(params.get('categoryId') ?? '[]') as number[]

    if (ids.includes(item.id)) ids.splice(ids.indexOf(item.id), 1)
    else if (item.id === 0) ids = [0]
      else if (ids.length >= 1 && ids.includes(0)) ids.splice(ids.indexOf(0), 1, item.id)
    else ids.push(item.id)

    params.set('categoryId', JSON.stringify(ids))

    router.push(`${pathname}?${params.toString()}`)
  }

  React.useEffect(() => {
    if (!list) loadCategories()
  }, [])

  if (!list) return null

  return list.case({
    rejected: () => null,
    pending: () => (
      <div className={cn([styles.CategoryList, 'section-container'])}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className={cn(styles.item)} width={150} height={23} />
        ))}
      </div>
    ),
    fulfilled: (t) => (
      <ul className={cn([styles.CategoryList, 'section-container'])}>
        <li>
          <UiToggleButton
            isActive={JSON.parse(searchParams.get('categoryId') ?? '[]').includes(0)}
            item={{ id: 0, name: '', parent_id: 0 }}
            onCLick={click}
          >
            Все товары
          </UiToggleButton>
        </li>
        {t.map((item) => (
          <li key={item.id + item.parent_id}>
            <UiToggleButton
              isActive={JSON.parse(searchParams.get('categoryId') ?? '[]').includes(item.id)}
              item={item}
              onCLick={click}
            >
              {item.name}
            </UiToggleButton>
          </li>
        ))}
      </ul>
    )
  })
})

export default CategoryList
