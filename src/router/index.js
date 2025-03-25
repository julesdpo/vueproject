// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Login.vue'
import RegisterView from '@/views/Register.vue'
import ProductsView from '@/views/Products.vue'
import CartView from '@/views/CartView.vue'

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
    },

    // Page de produits

    {
        path: '/products',
        name: 'products',
        component: ProductsView
    },

    // Page de panier

    {
        path: '/cart',
        name: 'cart',
        component: CartView
    }




  ]
})

export default router
