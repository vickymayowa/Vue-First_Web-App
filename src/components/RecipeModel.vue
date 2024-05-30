<script setup>
defineProps(['recipedetails'])
</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="font-bold"></h3>
                Instructions
                <h3 class="text-base font-bold leading-6 text-gray-900" id="modal-title">
                  {{ recipedetails.name }}
                </h3>
                <div class="mt-2">
                  <div
                    v-for="(item, i) in recipedetails.instructions"
                    :key="i"
                    class="mb-2 flex items-start"
                  >
                    <span class="font-bold text-lg mr-2">{{ i + 1 }}</span>
                    <p class="text-base leading-relaxed">{{ item }}</p>
                  </div>
                  <p class="text-start font-bold">Ingredients</p>
                  <span
                    v-for="(ingredients, i) in recipedetails.ingredients"
                    :key="i"
                    class="inline-flex items-center rounded-md gap-3 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >{{ ingredients }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              aria-hidden="true"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            >
              Save changes
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
