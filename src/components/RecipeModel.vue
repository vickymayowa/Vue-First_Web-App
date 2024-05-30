<template>
  <dialog class="copy-link-dialog" :class="{ 'copy-link-dialog--fadeout': !showModal }">
    <form @submit.prevent="submitForm">
      <header>
        <h2>Share the link</h2>
        <button class="close-btn secndary" type="button" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </header>
      <div class="copy-link-dialog__content">
        <div class="copy-link-wrapper">
          <input id="copy-link-input" type="text" required v-model="link" readonly />
          <button class="copy-btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-link"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 15l6 -6" />
              <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
              <path
                d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"
              />
            </svg>
            <span id="copy-text"> Copy Link </span>
          </button>
        </div>
      </div>
    </form>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const link = ref('https://example.com/share-this')

const closeModal = () => {
  showModal.value = false
}

const submitForm = () => {
  // Your form submission logic goes here
  console.log('Form submitted')
}
</script>

<style scoped>
:root {
  --primary: #323ac0;
  --text: #252728;
  --headline: #1a1e1f;
  --gray-text: #6d7679;
  --white: #fff;
  --background: #f8f8ff;
  --gray-dark: #9ba2a4;
  --gray-light: #f3f3f4;
}

* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

body {
  font-family: 'Mulish', sans-serif;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
}

.share-btn {
  border-radius: 50%;
  appearance: none;
  padding: 1rem;
  color: var(--primary);
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 6px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: var(--white);
  border: none;
}

.share-btn:hover {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 6px 12px;
}

.share-btn svg {
  stroke: var(--primary);
}

.close-btn {
  background-color: inherit;
  cursor: pointer;
  border: none;
}

.close-btn svg {
  stroke: var(--gray-dark);
  height: 1.75rem;
  width: 1.75rem;
}

.copy-link-dialog {
  border-radius: 0.75rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-width: 36rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 4rem;
  border: none;
  background-color: var(--white);
  animation: fadeInAnimation ease-in-out 0.5s forwards;
}

.copy-link-dialog header {
  display: flex;
  min-height: 4rem;
  padding: 1.5rem 2rem 0.75rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-light);
}

.copy-link-dialog header h2 {
  font-size: 1.5rem;
  color: var(--headline);
}

.copy-link-dialog--fadeout {
  animation: fadeOutAnimation ease-in-out 0.5s forwards;
}

.copy-link-dialog__content {
  padding: 2rem;
}

.copy-link-wrapper {
  display: flex;
  color: var(--gray-text);
  border-radius: 0.5rem;
  font-weight: 700;
  top: 30px;
  color: var(--text);
  justify-content: space-between;
  background-color: var(--gray-light);
  padding: 0.25rem;
  padding-left: 1.5rem;
}

.copy-link-wrapper input {
  color: var(--gray-text);
  outline: none;
  border: none;
  width: 100%;
  top: 30px;
  font-weight: 800;
  background-color: inherit;
  font-size: 1.2rem;
}

.copy-link-wrapper input::selection {
  background-color: var(--primary);
  color: var(--white);
}

.copy-link-dialog h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.copy-link-wrapper button {
  color: var(--primary);
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  font-size: 1.1rem;
  align-items: center;
  background-color: var(--white);
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 6px;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
