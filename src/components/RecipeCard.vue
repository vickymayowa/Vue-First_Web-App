<script setup>
import { ref, onMounted } from 'vue'
import RecipeModal from '../components/RecipeModel.vue'
import LoaderComponent from '../components/Loader.vue'

defineProps(['recipedetails'])

const showModal = ref(false)
const isLoading = ref(true)
import { useRecipeStore } from '../store/recipeStore'
const recipeStore = useRecipeStore()

onMounted(() => {
  recipeStore.fetchRecipes().then(() => {
    isLoading.value = false
  })
})
</script>

<template>
  <div class="p-4 relative">
    <LoaderComponent v-if="isLoading" />
    <div v-else>
      <img :src="recipedetails.image" class="shadow shadow-4 rounded rounded-2" alt="Recipe-Image" />
      <div>
        <h2 class="text mt-4 ms-3 font-bold">{{ recipedetails.name }}</h2>
        <div class="absolute bottom-9 ms-4 right-8">
          <div class="bg-gray-800 text-white text-lg rounded-3 px-4 py-2">
            {{ recipedetails.rating }}
          </div>
        </div>
      </div>
      <br />
      <span
        class="items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ms-5"
        >{{ recipedetails.prepTimeMinutes }} - Mins</span
      >
      <button
        type="button"
        :data-bs-target="'#modal-' + recipedetails.id"
        class="btn btn-primary mt-2 ms-5 mb-3 bg-green-500 text-gray-100 py-2 px-4 rounded-lg hover:bg-green-600 shadow-lg relative right-2 mt-7 text-white"
        @click="showModal = true"
      >
        Prepare Recipe..!!
      </button>
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center z-50"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="fixed inset-0 bg-black opacity-50"></div>
        <div class="bg-white p-4 rounded shadow-lg z-10 flex justify-center items-center">
          <button
            type="button"
            :id="'modal-' + recipedetails.id"
            class="text-gray-500 hover:text-gray-700 absolute top-0 right-0 m-4"
            @click="showModal = false"
          >
            &times;
          </button>
          <RecipeModal :recipedetails="recipedetails" />
        </div>
      </div>
    </div>
  </div>
</template>

