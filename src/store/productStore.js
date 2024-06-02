// store/productStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

const PRODUCT_API_URL = 'https://dummyjson.com/products' // Base API URL

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
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
    },
    async fetchProductById(id) {
      this.isLoading = true
      try {
        const response = await axios.get(`${PRODUCT_API_URL}/${id}`)
        console.log(response)
        this.product = response.data
      } catch (error) {
        console.error('Error fetching product ==> ', error.message)
      } finally {
        this.isLoading = false
      }
    }
  }
})
