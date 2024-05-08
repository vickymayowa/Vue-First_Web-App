<script setup>
import { computed, ref } from 'vue'
var myName = 'Vickydev'
var age = ref(0)
var day = ref('Tuesday')
var check = ref(false)
const students = [
  { id: 1, name: 'John', age: 25, paid: true },
  { id: 2, name: 'Olamide', age: 95, paid: false },
  { id: 3, name: 'Victor', age: 45, paid: false },
  { id: 4, name: 'Olamide', age: 95, paid: false },
  { id: 5, name: 'Abike', age: 65, paid: true },
  { id: 6, name: 'Sunday', age: 55, paid: true }
]
const togglePaid = (id) => {
  let student = students.find((student) => student.id === id)
  if (student) student.paid = !student.paid
}

const paidStudents = computed(() => {
  return students.filter((student) => student.paid)
})
</script>

<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded shadow-md">
      <h4 class="text-xl font-semibold">Hello World, Dear {{ myName }}, Welcome to Vue</h4>
      <p class="text-gray-700">Age: {{ age }}</p>
      <div class="mt-4">
        <p class="font-semibold">All Students</p>
        <div v-for="(student, index) in students" :key="index" class="mt-2">
          <p>
            Name: {{ student.name }} - Age: {{ student.age }} - Paid:
            {{ student.paid ? 'Yes' : 'No' }}
          </p>
          <p :id="student.paid ? 'paid' : 'NotPaid'" @click="togglePaid(student.id)">
            {{ student.name }}
          </p>
        </div>
      </div>
      <button
        @click="age++"
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Increase my Age
      </button>
      <div v-if="day === 'Tuesday'">Today is Tuesday</div>
      <div v-else-if="day === 'Wednesday'">Today is Wednesday</div>
      <div v-else>Today is Not Tuesday</div>
      <div v-show="day === 'Wednesday'">Today is Wednesday</div>
      <div v-for="(student, index) in paidStudents" :key="index">
        <p>{{ student.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#paid {
  color: white;
  background-color: green;
}
#NotPaid {
  color: red;
}
</style>
