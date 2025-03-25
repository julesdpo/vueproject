<template>
    <div class="min-h-screen bg-gray-100 p-6">
      <h1 class="text-2xl font-bold mb-6">Votre Panier</h1>
      <div v-if="cart.items.length === 0" class="text-center">
        <p>Votre panier est vide.</p>
      </div>
      <div v-else>
        <div class="grid gap-4 mb-6" v-for="item in cart.items" :key="item.id">
          <div class="flex items-center bg-white p-4 rounded shadow">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-cover rounded mr-4"
            />
            <div class="flex-1">
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="font-bold text-blue-600">{{ item.price }} €</p>
              <div class="mt-2 flex items-center">
                <button
                  @click="decrease(item)"
                  class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded"
                >
                  -
                </button>
                <span class="mx-2">{{ item.quantity }}</span>
                <button
                  @click="increase(item)"
                  class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold">Sous-total :</p>
              <p class="font-bold text-blue-600">
                {{ (item.price * item.quantity).toFixed(2) }} €
              </p>
              <button
                @click="remove(item.id)"
                class="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
        <div class="text-right mt-4">
          <p class="text-xl font-bold">
            Total : {{ total.toFixed(2) }} €
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useCartStore } from '@/stores/cart'
  
  export default {
    setup() {
      const cart = useCartStore()
  
      const total = computed(() => {
        return cart.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        )
      })
  
      function increase(item) {
        // Ajoute le produit, ce qui incrémente la quantité s'il existe déjà
        cart.addToCart(item)
      }
  
      function decrease(item) {
        const existingItem = cart.items.find(i => i.id === item.id)
        if (existingItem && existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          remove(item.id)
        }
      }
  
      function remove(productId) {
        cart.removeFromCart(productId)
      }
  
      return {
        cart,
        total,
        increase,
        decrease,
        remove
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  