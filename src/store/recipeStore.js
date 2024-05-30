import { defineStore } from 'pinia'
import axios from 'axios'

// const RECIPE_API_URL = 'https://dummyjson.com/recipes'
const RECIPE_API_URL = 'recipes.json'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],
    isLoading: false,
    searchRecipe: ''
  }),
  actions: {
    async fetchRecipes() {
      this.isLoading = true
      try {
        const response = await axios.get(`${RECIPE_API_URL}`)
        this.recipes = response.data.recipes
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        this.isLoading = false
      }
    },
    setSearchRecipe(newSearch) {
      this.searchRecipe = newSearch
    }
  },
  getters: {
    filteredRecipes: (state) => {
      return state.recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(state.searchRecipe.toLowerCase())
      })
    }
  }
})
