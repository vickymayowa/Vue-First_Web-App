<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="product">
    <img :src="product.thumbnail" alt="Product image" />
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p><strong>Price:</strong> ${{ product.price }}</p>
    <p><strong>Category:</strong> {{ product.category }}</p>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '@/store/productStore'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    ...mapState(useProductStore, ['products', 'isLoading'])
  },
  created() {
    const productStore = useProductStore()
    productStore.fetchProducts()
  },
  methods: {
    viewProduct(id) {
      this.$router.push({ name: 'ProductPage', params: { id } })
    }
  }
}
</script>
