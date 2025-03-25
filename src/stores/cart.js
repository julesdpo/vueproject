import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // Chaque item : { id, name, description, price, image, quantity }
  }),
  actions: {
    loadCartForUser(username) {
      if (!username) {
        this.items = []
        return
      }
      const stored = localStorage.getItem(`cart_${username}`)
      if (stored) {
        this.items = JSON.parse(stored)
      } else {
        this.items = []
      }
    },
    saveCartForUser(username) {
      if (!username) return
      localStorage.setItem(`cart_${username}`, JSON.stringify(this.items))
    },
    addToCart(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    }
  }
})
