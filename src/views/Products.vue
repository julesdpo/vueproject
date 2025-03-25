<template>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white p-4 shadow rounded"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-auto mb-4 object-cover rounded"
        />
        <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
        <p class="font-bold text-blue-600 mb-2">{{ product.price }} €</p>
        <button
          @click="add(product)"
          class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useCartStore } from '@/stores/cart'
  
  export default {
    setup() {
      const products = ref([])
      const cartStore = useCartStore()
  
      onMounted(async () => {
        try {
          const response = await fetch('/products.json')
          products.value = await response.json()
        } catch (err) {
          console.error(err)
        }
      })
  
      function add(product) {
        cartStore.addToCart(product)
        // Optionnel : on pourrait sauvegarder tout de suite, si tu veux
        // cartStore.saveCartForUser(...) => besoin du userStore pour le nom
      }
  
      return {
        products,
        add,
      }
    },
  }
  </script>
  