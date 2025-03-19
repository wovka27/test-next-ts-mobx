export const storage = {
  isClient() {
    return typeof window === 'undefined'
  },

  getItem<T>(key: string): T | null {
    if (this.isClient()) return null
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  },

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
