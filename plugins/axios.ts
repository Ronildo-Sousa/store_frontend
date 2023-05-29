import { defineNuxtPlugin } from 'nuxt/app'
import axios from 'axios'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      axios: () => axios.create({baseURL: 'http://localhost/api'})
    }
  }
})