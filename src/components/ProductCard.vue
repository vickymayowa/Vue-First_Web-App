<template>
  <div class="bg-white rounded-lg shadow-lg p-6 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
    <img
      :src="product.thumbnail"
      class="w-full h-48 object-cover rounded-t-lg"
      :alt="product.title"
    />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2">{{ product.title }}</h2>
      <p class="text-gray-700 mb-2">{{ product.description }}</p>
      <div class="mb-2">
        <span class="text-green-600 font-semibold">${{ product.price }}</span>
        <span class="text-gray-500 line-through ml-2">
          ${{ (product.price / (1 - product.discountPercentage / 100)).toFixed(2) }}
        </span>
        <span class="text-sm text-gray-500 ml-2">({{ product.discountPercentage }}% off)</span>
      </div>
      <div class="flex items-center mb-2">
        <span class="text-yellow-500 mr-1">★</span>{{ product.rating }}
      </div>
      <div class="text-gray-500 text-sm mb-4">
        <p>
          Stock:
          <span :class="{ 'text-red-500': product.stock < 10 }">
            {{ product.stock < 10 ? 'Low Stock' : 'In Stock' }}
          </span>
        </p>
      </div>
      <button
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
