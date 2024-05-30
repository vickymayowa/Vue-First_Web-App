<template>
  <div class="container mx-auto">
    <div class="flex items-center space-x-9">
      <h1 class="text-3xl font-bold mb-8 mt-6 ms-9">Recipes</h1>
      <div class="ml-3 flex space-x-4">
        <input
          type="text"
          v-model="searchRecipe"
          placeholder="Search recipes"
          class="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6">
      <div
        v-for="recipe in store.filteredRecipes"
        :key="recipe.id"
        class="bg-white rounded-lg shadow-md"
      >
        <RecipeCard :recipedetails="recipe" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRecipeStore } from '@/store/recipeStore'
import RecipeCard from '../components/RecipeCard.vue'
import { storeToRefs } from 'pinia'

const store = useRecipeStore()
const { recipes, searchRecipe } = storeToRefs(store)
// console.log(recipes)

onMounted(() => {
  store.fetchRecipes()
})
</script>
