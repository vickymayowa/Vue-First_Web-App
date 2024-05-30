<template>
  <div class="container mx-auto">
    <div class="flex items-center space-x-9">
      <h1 class="text-3xl font-bold mb-8 mt-6 ms-9">Recipes</h1>
      <div class="ml-3 flex space-x-4">
        <input
          type="text"
          v-model="searchRecipeLocal"
          placeholder="Search recipes"
          class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div v-if="filteredRecipes.length === 0" class="text-center mt-6 font-bold text-3xl mb-5">
      No recipes found matching your search.
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" v-else>
      <div v-for="recipe in filteredRecipes" :key="recipe.id" class="bg-white rounded-lg shadow-md">
        <RecipeCard :recipedetails="recipe" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRecipeStore } from '@/store/recipeStore'
import RecipeCard from '../components/RecipeCard.vue'
import { storeToRefs } from 'pinia'

const store = useRecipeStore()
const { searchRecipe, filteredRecipes } = storeToRefs(store)
const searchRecipeLocal = ref(searchRecipe.value)
watch(searchRecipeLocal, (newVal) => {
  store.setSearchRecipe(newVal)
})
store.fetchRecipes()
</script>
