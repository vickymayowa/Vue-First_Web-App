<template>
  <div class="container mx-auto mt-10">
    <div class="bg-white shadow-md rounded">
      <div class="bg-gray-800 text-white p-4 rounded-t">
        <h3 class="text-center text-lg font-semibold">Todo List</h3>
      </div>
      <div class="p-4 flex justify-between items-center">
        <div>
          Total Todo Count: <span class="font-bold">{{ store.length }}</span>
          <button class="alert alert-danger" @click="store.$reset()">Reset State</button>
        </div>
        <div>
          <select v-model="filter" @change="applyFilter" class="border rounded p-2">
            <option value="all">Display All</option>
            <option value="completed">Display Completed</option>
            <option value="pending">Display Pending</option>
          </select>
        </div>
      </div>
      <div class="p-4">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-1/12 px-4 py-2">S/N</th>
              <th class="w-7/12 px-4 py-2">Todo Item</th>
              <th class="w-4/12 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(todo, index) in filteredTodos"
              :key="index"
              class="bg-gray-100 even:bg-gray-200"
            >
              <th class="border px-4 py-2">{{ todo.id }}</th>
              <td class="border px-4 py-2">{{ todo.todo }}</td>
              <td class="border px-4 py-2">
                <span
                  :class="{
                    'bg-green-500 text-white px-2 py-1 rounded': todo.completed,
                    'bg-yellow-500 text-white px-2 py-1 rounded': !todo.completed
                  }"
                >
                  {{ todo.completed ? 'Completed' : 'Pending' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useToDoStore } from '../store/todoStore.js'
import { storeToRefs } from 'pinia'

const store = useToDoStore()
const { todos, todoCount } = storeToRefs(store)
const filter = ref('all')

const filteredTodos = computed(() => {
  if (filter.value === 'completed') {
    return store.todos.filter((todo) => todo.completed)
  } else if (filter.value === 'pending') {
    return store.todos.filter((todo) => !todo.completed)
  } else {
    return store.todos
  }
})

const applyFilter = () => {
  if (filter.value === 'completed') {
    store.completedTodos = store.todos.filter((todo) => todo.completed)
  } else if (filter.value === 'pending') {
    store.pendingTodos = store.todos.filter((todo) => !todo.completed)
  } else {
    store.completedTodos = []
    store.pendingTodos = []
  }
}

onMounted(() => {
  if (!todoCount) {
    store.getAllTodos()
  }
})
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
