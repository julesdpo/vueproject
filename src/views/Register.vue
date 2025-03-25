<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="max-w-sm w-full p-6 bg-white rounded shadow">
        <h1 class="text-xl font-bold mb-4 text-center">Créer un compte</h1>
  
        <input
          v-model="username"
          placeholder="Nom d'utilisateur"
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
        <p v-if="success" class="text-green-500 font-semibold mb-2">
          {{ success }}
        </p>
  
        <button
          @click="onRegister"
          class="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Créer le compte
        </button>
  
        <button
          @click="goBack"
          class="mt-3 text-blue-600 hover:underline"
        >
          Retour
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const username = ref('')
      const password = ref('')
      const error = ref('')
      const success = ref('')
      const router = useRouter()
  
      function onRegister() {
        error.value = ''
        success.value = ''
  
        if (!username.value || !password.value) {
          error.value = 'Veuillez renseigner un nom et un mot de passe'
          return
        }
  
        try {
          let users = loadUsers()
  
          const alreadyExists = users.some(
            user => user.username === username.value
          )
          if (alreadyExists) {
            error.value = 'Cet utilisateur existe déjà'
            return
          }
  
          const newUser = {
            username: username.value,
            password: password.value
          }
          users.push(newUser)
  
          saveUsers(users)
  
          success.value = 'Compte créé avec succès !'
          username.value = ''
          password.value = ''
        } catch (err) {
          error.value = 'Erreur durant la création du compte'
          console.error(err)
        }
      }
  
      function goBack() {
        router.back()
      }
  
      return {
        username,
        password,
        error,
        success,
        onRegister,
        goBack,
      }
    }
  }
  
  function loadUsers() {
    const stored = localStorage.getItem('users')
    return stored ? JSON.parse(stored) : []
  }
  
  function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users))
  }
  </script>
  