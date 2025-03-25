<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-sm w-full p-6 bg-white rounded shadow">
      <h1 class="text-xl font-bold mb-4 text-center">Se connecter</h1>

      <input
        v-model="username"
        placeholder="Votre nom"
        class="border border-gray-300 rounded w-full mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        v-model="password"
        placeholder="Mot de passe"
        type="password"
        class="border border-gray-300 rounded w-full mb-4 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <p v-if="error" class="text-red-500 font-semibold mb-2">
        {{ error }}
      </p>

      <button
        @click="onLogin"
        class="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Login
      </button>

      <button
        @click="goToRegister"
        class="mt-3 text-blue-600 hover:underline"
      >
        Pas de compte ? Inscrivez-vous
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const userStore = useUserStore()
    const router = useRouter()

    function onLogin() {
      try {
        const users = loadUsers()

        const foundUser = users.find(u =>
          u.username === username.value && u.password === password.value
        )

        if (foundUser) {
          error.value = ''
          userStore.login(foundUser.username)
          router.push('/')
        } else {
          error.value = 'Identifiants invalides'
        }
      } catch (err) {
        error.value = 'Erreur de lecture utilisateurs'
        console.error(err)
      }
    }

    function goToRegister() {
      router.push('/register')
    }

    return {
      username,
      password,
      error,
      onLogin,
      goToRegister,
    }
  }
}

function loadUsers() {
  const stored = localStorage.getItem('users')
  return stored ? JSON.parse(stored) : []
}
</script>
