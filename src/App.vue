<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Fridge from './components/Fridge.vue'
import FormComponents from './components/FormComponents.vue'
import optionsComponent from './components/optionsComponent.vue'

const user = {
  id: 1,
  name: 'Vickydev'
}
</script>

<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-center">
      <div class="flex space-x-4">
        <RouterLink to="/" class="text-white hover:text-gray-400">Home</RouterLink>
        <RouterLink to="/about" class="text-white hover:text-gray-400">About</RouterLink>
        <RouterLink to="/login" class="text-white hover:text-gray-400">Login</RouterLink>
        <RouterLink to="/todo" class="text-white hover:text-gray-400">Todo List View</RouterLink>
        <RouterLink to="/products" class="text-white hover:text-gray-400"
          >Products List View</RouterLink
        >
        <RouterLink to="/recipe" class="text-white hover:text-gray-400">View Recipe </RouterLink>
        <RouterLink :to="`/user/${user.name}`" class="text-white hover:text-gray-400"
          >User</RouterLink
        >
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped></style>
