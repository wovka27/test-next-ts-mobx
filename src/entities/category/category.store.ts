import { fromPromise, type IPromiseBasedObservable } from 'mobx-utils'
import { type ICategory } from '@/entities/category/category.model'
import { action, makeObservable, observable } from 'mobx'
import { getCategories } from '@/entities/category/api/getCategories'

class CategoryStore {
  @observable.ref list: IPromiseBasedObservable<ICategory[]> | null = null

  constructor() {
    makeObservable(this)
  }

  @action loadCategories = () => {
    this.list = fromPromise(getCategories())
  }


}

const categoryStore = new CategoryStore()

export default categoryStore
