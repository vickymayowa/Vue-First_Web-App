<script setup>
import ProductCard from '../components/ProductCard.vue'
import { ref, onMounted, computed } from 'vue'
import { useProductStore } from '@/store/productStore'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)
const searchProductLocal = ref('')

const searchProducts = () => {
  productStore.fetchProducts(searchProductLocal.value)
}

// Fetch initial products when component mounts
onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="text-center font-bold text-4xl mt-4">Products View</div>
  <div class="flex justify-center mt-4">
    <input
      type="text"
      v-model="searchProductLocal"
      placeholder="Enter your Products Name"
      class="form-control px-4 py-2 border rounded-md"
      @input="searchProducts"
    />
  </div>
  <div v-if="isLoading" class="text-center mt-4">Loading...</div>
  <div v-else class="flex flex-wrap justify-center mt-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style scoped>
.form-control {
  width: 100%;
  max-width: 600px;
}
</style>
