// store/productStore.js or store/productStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

const PRODUCT_API_URL = 'https://dummyjson.com/products' // Base API URL

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false
  }),
  actions: {
    async fetchProducts(searchQuery = '') {
      this.isLoading = true
      try {
        const url = searchQuery 
          ? `${PRODUCT_API_URL}/search?q=${searchQuery}&limit=12` 
          : `${PRODUCT_API_URL}?limit=12`
        const response = await axios.get(url)
        console.log(response)
        this.products = response.data.products
      } catch (error) {
        console.error('Error fetching products ==> ', error.message)
      } finally {
        this.isLoading = false
      }
    }
  }
})
