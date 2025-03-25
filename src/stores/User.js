// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    name: '',
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
  persist: true, 
})
