import { action, computed, makeObservable, observable, reaction } from 'mobx'
import { type CartItem } from '@/entities/cart/cart.model'
import { storage } from '@/shared/lib/storage'

class CartStore {
  @observable cart: CartItem[] = []

  constructor() {
    makeObservable(this)

    // Реактивное сохранение корзины
    reaction(
      () => this.cart,
      (cartJson) => this.saveToStorage(cartJson)
    )
  }

  @action saveToStorage = (val: CartItem[]) => {
    storage.setItem('cart', val)
  }

  @action loadFromStorage = () => {
      const data = storage.getItem<CartItem[]>('cart')

      if (data) this.cart = data
  }

  @action loadCart = () => {
    this.loadFromStorage()
  }

  @action syncCart = (event: StorageEvent) => {
    if (event.key === 'cart' && event.newValue) {
      const value = event.newValue
      this.cart = JSON.parse(value)
    }
  }

  @action addToCart = (item: CartItem) => {
    const existingItem = this.cart.find((i) => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.cart.push(item)
    }

    this.saveToStorage(this.cart)
  }

  /**
   *
   * @param id
   * @param force Флаг для полного удаления элемента
   */
  @action removeFromCart = (id: number, force?: boolean) => {
    const existingIndex = this.cart.findIndex((i) => i.id === id)

    if (existingIndex === -1) return

    if (this.cart[existingIndex].quantity > 1 && !force) {
      this.cart[existingIndex].quantity -= 1
    } else {
      this.cart.splice(existingIndex, 1)
    }
    this.saveToStorage(this.cart)
  }

  @action clearCart = () => {
    this.cart = []
  }

  @computed get totalPrice() {
    return this.cart.reduce<number>((sum, item) => sum + item.price * item.quantity, 0)
  }

  @computed get totalItems() {
    return this.cart.reduce<number>((sum, item) => sum + item.quantity, 0)
  }

  @computed get cartItemsIds() {
    return this.cart.map<number>((item) => item.id)
  }
}

const cartStore = new CartStore()
export default cartStore
