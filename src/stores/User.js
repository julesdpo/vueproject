import { defineStore } from 'pinia'
import { useCartStore } from './cart'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    name: '',
  }),

  actions: {
    login(name) {
      this.isAuthenticated = true
      this.name = name

      const cartStore = useCartStore()
      cartStore.loadCartForUser(name)
    },

    logout() {
      const cartStore = useCartStore()
      cartStore.saveCartForUser(this.name)

      this.isAuthenticated = false
      this.name = ''
    },
  },
  persist: {
    enabled: true,
  },
})
