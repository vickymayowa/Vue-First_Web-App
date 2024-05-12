<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="addItem" class="bg-gray-200 p-8 rounded-lg shadow-lg w-80">
      <h1 class="text-2xl font-bold mb-4">Mini Fridge</h1>
      <div class="mb-4">
        <label for="item" class="block text-gray-700">Item:</label>
        <input
          v-model="itemName"
          id="item"
          type="text"
          placeholder="Add an item..."
          class="w-full px-3 py-2 rounded-lg border border-gray-300"
        />
      </div>
      <div class="mb-4">
        <label for="expiration" class="block text-gray-700">Expiration Time:</label>
        <input
          v-model="expirationTime"
          id="expiration"
          type="text"
          placeholder="e.g., 3 days"
          class="w-full px-3 py-2 rounded-lg border border-gray-300"
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Add Item
      </button>
      <ul class="mt-4">
        <li v-for="(item, index) in items" :key="index" class="mb-2 flex justify-between">
          <span
            class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
            >{{ item.name }}</span
          >
          <span
            class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
            >(Expires in: {{ item.expiration }})</span
          >
          <span
            v-if="item.expiresSoon"
            class="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
            >Expires soon!</span
          >
          <span v-else-if="item.expired" class="text-red-500">Expired!</span>
          <button
            @click="removeItem(index)"
            class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(JSON.parse(localStorage.getItem('items')) || [])
const itemName = ref('')
const expirationTime = ref('')

const addItem = () => {
  if (itemName.value.trim() !== '' && expirationTime.value.trim() !== '') {
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + parseInt(expirationTime.value.trim()))
    items.value.push({
      name: itemName.value.trim(),
      expiration: expirationTime.value.trim(),
      expiresSoon: false,
      expired: false,
      expirationDate
    })
    itemName.value = ''
    expirationTime.value = ''
    localStorage.setItem('items', JSON.stringify(items.value))
  }
}

const removeItem = (index) => {
  items.value.splice(index, 1)
  localStorage.setItem('items', JSON.stringify(items.value))
}

setInterval(() => {
  const now = new Date()
  items.value.forEach((item) => {
    const timeDifference = item.expirationDate - now
    if (timeDifference < 0) {
      item.expired = true
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      // Less than 24 hours left
      item.expiresSoon = true
    }
  })
}, 1000)
</script>

<style scoped>
/* Add custom styles here */
</style>
