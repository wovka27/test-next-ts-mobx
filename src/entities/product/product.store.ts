import { makeObservable, observable, action, runInAction } from 'mobx'
import { queueProcessor } from 'mobx-utils'
import { type IProductItem } from '@/entities/product/product.model'
import { getProductsItems } from '@/entities/product/api/getProductItems'
import categoryStore from '@/entities/category/category.store'
import { ICategory } from '@/entities/category/category.model'
import { removeDuplicatesBy } from '@/shared/lib/helpers/removeDublicatesBy'

export default class ProductStore {
  @observable private queue: number[] = []
  @observable products: IProductItem[] = []
  @observable is_loading = false
  @observable categories = categoryStore.list
  @observable has_more = true
  private batch_size = 25

  constructor() {
    makeObservable(this)

    // Обрабатываем очередь загрузки товаров
    queueProcessor(this.queue, async (start) => {
      await this.loadProducts(start, start + this.batch_size - 1)
    })
  }

  @action setIsLoading = (value: boolean) => {
    this.is_loading = value
  }

  @action clearProducts = () => {
    this.products = []
  }

  @action async loadProducts(start: number, end: number) {
    if (this.is_loading || !this.has_more) return

    const param = new URLSearchParams(window.location.search).get('categoryId')
    const category_id: number[] = JSON.parse(param ?? '[8]')
    const categories = await this.categories

    const data = await getProductsItems([start, end], {
      category_id: category_id.includes(0) ? (categories ?? ([] as ICategory[]))!.map((i) => i.id) : category_id
    })

    runInAction(() => {
      this.products = removeDuplicatesBy([...this.products, ...data], (item) => item.id)
      if (data.length < this.batch_size) this.has_more = false
    })
  }

  @action loadNextBatch() {
    if (this.has_more) this.queue.push(this.products.length)
  }
}
