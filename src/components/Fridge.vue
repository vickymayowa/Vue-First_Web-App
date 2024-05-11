<template>
  <div class="min-h-screen flex items-center justify-center">
    <form @submit.prevent="addItem" class="bg-gray-200 p-8 rounded-lg shadow-lg w-80">
      <h1 class="text-2xl font-bold mb-4">Mini Fridge</h1>
      <div class="mb-4">
        <label for="item" class="block text-gray-700">Item:</label>
        <input
          v-model="content"
          id="item"
          type="text"
          placeholder="Add an item..."
          class="w-full px-3 py-2 rounded-lg border border-gray-300"
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
        Add Item
      </button>
      <ul class="mt-4">
        <li v-for="(item, index) in items" :key="index" class="mb-2 flex justify-between">
          <span>{{ item }}</span>
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
const content = ref('')

const addItem = () => {
  if (content.value.trim() !== '') {
    items.value.push(content.value.trim())
    content.value = ''
    localStorage.setItem('items', JSON.stringify(items.value))
  }
}

const removeItem = (index) => {
  items.value.splice(index, 1)
  localStorage.setItem('items', JSON.stringify(items.value))
}
</script>

<style scoped>
/* Add custom styles here */
</style>
