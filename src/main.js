import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Vuex
import { createStore } from 'vuex'

// Pinia
import { createPinia } from 'pinia'

// Vue Router 
import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import LoginPage from './components/Login.vue'
import ProfilePage from './components/Profile.vue'
import ContactPage from './components/Contact.vue'
import ShowcasePage from './components/Showcase.vue'
import CreativePage from './components/Creative.vue'

// Routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/portfolio/profile', name: 'profile', component: ProfilePage },
  { path: '/portfolio/showcase', name: 'showcase', component: ShowcasePage },
  { path: '/portfolio/contact', name: 'contact', component: ContactPage },
  { path: '/portfolio/creative', name: 'creative', component: CreativePage },
]

// Router instance (FIXED)
const router = createRouter({
  history: createWebHashHistory(), // 🔥 IMPORTANT
  routes
})

// Vuex store
const store = createStore({
  state() {
    return { count: 0 }
  }
})

// Pinia
const pinia = createPinia()

// Create and mount app
createApp(App)
  .use(store)
  .use(pinia)
  .use(router)
  .mount('#app')