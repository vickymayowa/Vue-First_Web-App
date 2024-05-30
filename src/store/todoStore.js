import { defineStore } from 'pinia'
import axios from 'axios'

export const useToDoStore = defineStore('todoStore', {
  store: () => {
    return {
      todos: []
    }
  },
  getters: {
    todoCount: (state) => state.todos.length,
    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed)
    }
  },
  actions: {
    async getAllTodos() {
      try {
        const response = await axios.get('https://dummyjson.com/todos')
        console.log(response)
        this.todos = response.data.todos
      } catch (error) {
        console.error(error)
      }
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
    updateTodo(index, updatedTodo) {
      this.todos[index] = updatedTodo
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    }
  }
})
