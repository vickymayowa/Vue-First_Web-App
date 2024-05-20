<template>
  <div class="container mx-auto mt-5 px-4">
    <form
      action=""
      class="card w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
      @submit.prevent="go"
    >
      <h4 class="text-center text-xl font-semibold mb-4">Sign-up form</h4>
      <div>
        <label for="name" class="block text-gray-700 my-2">Name</label>
        <input
          type="text"
          placeholder="Name"
          class="form-control w-full p-2 border border-gray-300 rounded-md"
          v-model="v$.form.name.$model"
          name="name"
          id="name"
        />
        <div v-for="error in v$.form.name.$errors" :key="error.$message">
          <span class="text-sm text-red-500">{{ error.$message }}</span>
        </div>

        <label for="email" class="block text-gray-700 my-2">Email</label>
        <input
          type="email"
          placeholder="Email"
          class="form-control w-full p-2 border border-gray-300 rounded-md"
          v-model="v$.form.email.$model"
          name="email"
          id="email"
        />
        <div v-for="error in v$.form.email.$errors" :key="error.$message">
          <span class="text-sm text-red-500">{{ error.$message }}</span>
        </div>

        <label for="password" class="block text-gray-700 my-2">Password</label>
        <input
          type="password"
          placeholder="Password"
          class="form-control w-full p-2 border border-gray-300 rounded-md"
          v-model="v$.form.password.$model"
          name="password"
          id="password"
        />
        <div v-for="error in v$.form.password.$errors" :key="error.$message">
          <span class="text-sm text-red-500">{{ error.$message }}</span>
        </div>

        <div>
          <button
            class="btn btn-primary w-full mt-3 mb-3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'

export default {
  setup() {
    useVuelidate()
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: 'Joshua',
      school: 'SQI',
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  validations() {
    return {
      form: {
        name: { required, minLength: minLength(5), maxLength: maxLength(10) },
        email: { required, email },
        password: { required, minLength: minLength(5), maxLength: maxLength(10) }
      }
    }
  },
  methods: {
    go() {
      console.log(this.v$)
    }
  }
}
</script>

<style>
/* Add custom styles here if needed */
</style>
