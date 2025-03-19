import React, { Suspense } from 'react'
import ProductList from '@/entities/product/ui/ProductList'
import CategoryList from '@/entities/category/ui/CategoryList'

const Home = () => {
  return (
    <section>
      <h2 className="section-container"><b>Категории товаров</b></h2>
      <Suspense>
        <CategoryList />
      </Suspense>
      <ProductList />
    </section>
  )
}

export default Home
