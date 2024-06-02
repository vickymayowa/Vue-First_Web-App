<script setup>
import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductCard.vue'
import { useRouter } from 'vue-router'

// Accessing the product store instance
const productStore = useProductStore()

const router = useRouter()
const viewProduct = (id) => {
  router.push({ name: 'ProductPage', params: { id } })
}

// Method to search for products (implementation needed)
const searchProducts = (event) => {
  const searchString = event.target.value
}
</script>

<template>
  <div class="text-center font-bold text-4xl mt-4">Products View</div>
  <div class="flex justify-center mt-4">
    <input
      type="text"
      placeholder="Enter your Product's Name"
      class="form-control px-4 py-2 border rounded-md"
      @input="searchProducts"
    />
  </div>
  <div v-if="productStore.isLoading" class="text-center mt-5 justify-center text-3xl">
    Loading Products ......
  </div>
  <div v-else class="flex flex-wrap justify-center mt-4 gap-3">
    <ProductCard
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
      @view-product="viewProduct"
    />
  </div>
</template>

<style scoped>
/* Scoped styles for the input field */
.form-control {
  width: 100%;
  max-width: 600px;
}
</style>
