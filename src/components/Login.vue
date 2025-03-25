<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-sm w-full p-6 bg-white rounded shadow">
      <h1 class="text-xl font-bold mb-4 text-center">Se connecter</h1>
      <input
        v-model="username"
        placeholder="Votre nom"
        class="border border-gray-300 rounded w-full mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        @click="onLogin"
        class="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

export default {
  setup() {
    const username = ref('')
    const userStore = useUserStore()

    function onLogin() {
      if (username.value) {
        userStore.login(username.value)
      }
    }

    return {
      username,
      onLogin,
    }
  },
}
</script>
