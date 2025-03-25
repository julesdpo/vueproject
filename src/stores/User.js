// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    isAuthenticated: false,
  }),
  actions: {
    login(name) {
      this.isAuthenticated = true
      this.name = name
    },
    logout() {
      this.isAuthenticated = false
      this.name = ''
    },
  },
  persist: true, // si tu utilises pinia-plugin-persistedstate
})
