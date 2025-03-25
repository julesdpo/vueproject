// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Login.vue'
import RegisterView from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Page de login
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    // Page Home
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Page d'inscription
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    }
  ]
})

export default router
