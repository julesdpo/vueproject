// src/stores/user.js
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

      // Charger le panier spécifique à cet utilisateur
      const cartStore = useCartStore()
      cartStore.loadCartForUser(name)
    },

    logout() {
      // Sauvegarder le panier courant dans localStorage
      const cartStore = useCartStore()
      cartStore.saveCartForUser(this.name)

      // Réinitialiser l'état user
      this.isAuthenticated = false
      this.name = ''
    },
  },
  persist: {
    enabled: true,
  },
})
