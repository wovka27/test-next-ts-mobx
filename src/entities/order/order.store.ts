import { action, makeObservable, observable, reaction } from 'mobx'
import { type IOrder } from '@/entities/order/order.model'
import { storage } from '@/shared/lib/storage'

class OrderStore {
  @observable.ref orders: IOrder[] = []

  constructor() {
    makeObservable(this)
    this.loadOrders()
    reaction(
      () => this.orders,
      (arg) => this.saveToStorage(arg)
    )
  }

  @action saveToStorage = (val: IOrder[]) => {
    storage.setItem('order', val)
  }

  generateOrderNumber() {
    const getRandomPart = (digits: number) =>
      Math.floor(Math.random() * 10 ** digits)
        .toString()
        .padStart(digits, '0')

    const part1 = getRandomPart(3)
    const part2 = getRandomPart(3)
    return `#${part1}-${part2}`
  }

  @action loadFromStorage = () => {
    const data = storage.getItem<IOrder[]>('order')

    if (data) this.setOrders(data)
  }

  @action loadOrders = () => {
    this.loadFromStorage()
  }

  @action setOrders = (orders: IOrder[]) => {
    this.orders = orders
    this.saveToStorage(this.orders)
  }

  @action addOrder = (order: IOrder) => {
    this.orders.push({...order, order_id: this.generateOrderNumber(), id: this.orders.length + 1})
    this.saveToStorage(this.orders)
  }

  @action removeOrder = (id: number) => {
    this.orders = this.orders.filter((order) => order.id !== id)
  }
}

const orderStore = new OrderStore()
export default orderStore
