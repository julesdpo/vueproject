<script>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const { isAuthenticated } = storeToRefs(userStore)

    function onLogout() {
      if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        userStore.logout()
        router.push('/login')
      }
    }

    return {
      isAuthenticated,
      onLogout
    }
  }
}
</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Schtroumpfs</h1>
      <nav class="flex space-x-4">
        <router-link to="/products" class="hover:underline">Produits</router-link>
        <router-link
        v-if="isAuthenticated"

        to="/cart" class="hover:underline">Panier</router-link>

        <router-link
          v-if="!isAuthenticated"
          to="/login"
          class="hover:underline"
        >
          Login
        </router-link>
        <router-link
          v-if="!isAuthenticated"
          to="/register"
          class="hover:underline"
        >
          Register
        </router-link>

        <button
          v-if="isAuthenticated"
          @click="onLogout"
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Déconnexion
        </button>
      </nav>
    </div>
  </header>

  <main class="mx-auto p-6">
    <router-view />
  </main>

  <footer class="bg-gray-800 text-white p-4 mt-6">
    <div class="container mx-auto text-center">
      <p>© 2025 E-Commerce. Footer</p>
      
    </div>
  </footer>
</template>
