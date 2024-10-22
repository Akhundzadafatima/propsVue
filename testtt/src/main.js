// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css" 

import "@/components/MainPage.vue"

const app=createApp(App)
createApp(App).mount('#app')

