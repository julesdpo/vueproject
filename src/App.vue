<script>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    function onLogout() {
      if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        userStore.logout()
        router.push('/login')
      }
    }

    return {
      onLogout
    }
  }
}

</script>

<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">E-Commerce</h1>
      <nav class="flex space-x-4">
        
        <router-link to="/products" class="hover:underline">Produits</router-link>
        <router-link to="/cart" class="hover:underline">Panier</router-link>
        <router-link to="/login" class="hover:underline">Login</router-link>
        <router-link to="/register" class="hover:underline">Register</router-link>
        <button
          @click="onLogout"
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Déconnexion
        </button>      
      </nav>
    </div>
  </header>

  <main class="container mx-auto p-6">
    <router-view />
  </main>

  <footer class="bg-gray-800 text-white p-4 mt-6">
    <div class="container mx-auto text-center">
      <p>© 2025 E-Commerce. Tous droits réservés.</p>
      <p>
        <a href="/terms" class="hover:underline">Conditions d'utilisation</a> | 
        <a href="/privacy" class="hover:underline">Politique de confidentialité</a>
      </p>
    </div>
  </footer>
</template>
