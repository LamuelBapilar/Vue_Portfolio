<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { ref, onMounted } from 'vue'
  
  const router = useRouter()
  const route = useRoute()
  
  const isClose = ref(false)
  
  const go = (path) => {

    if (path === route.path) {
      return
    }

    isClose.value = false
    const sound = new Audio('./sfx/receipt.mp3')
    sound.volume = 0.5
    sound.play()

    setTimeout(() => {
      router.push(path)
    }, 1100) 
  }

  onMounted(() => {
    setTimeout(() => {
      isClose.value = true
    }, 200)
  })

  </script>
  
  
  <template>
    <div class="d-flex app">
  
      <!-- Sidebar -->
      <div class="text-white p-3 sidebar">
        <h5 class="mb-3 sidebar-title">
          Company <span style="font-size:40px; color:#222; background:#E89F48;">☢</span>
        </h5>
  
        <button class="btn sidebar-btn w-100 text-start mb-2" :class="{ active: route.path === '/portfolio/profile' }" @click="go('/portfolio/profile')">Profile</button>
  
        <button class="btn sidebar-btn w-100 text-start mb-2" :class="{ active: route.path === '/portfolio/showcase' }" @click="go('/portfolio/showcase')">Showcase</button>
  
        <button class="btn sidebar-btn w-100 text-start mb-2":class="{ active: route.path === '/portfolio/contact' }" @click="go('/portfolio/contact')">Contact</button>
  
        <button class="btn sidebar-btn w-100 text-start mb-2" :class="{ active: route.path === '/portfolio/creative' }" @click="go('/portfolio/creative')">Creative</button>
  
        <button class="btn sidebar-btn w-100 text-start logout-btn" @click="go('/login')">Logout</button>

      </div>
  
      <!-- Sliding Page -->
      <div class="slide-page" :class="{ show: isClose }">
        <h1>Fetching Data...</h1>
      </div>

    </div>
  </template>
  
  
  <style scoped>
 
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  .sidebar {
    width: 250px;
    min-height: 100vh;
    background-color: #E89F48;
    border-right: 4px solid #222222;
    display: flex;
    flex-direction: column;
  }
  
  .sidebar-title {
    color: #222222;
    font-family: 'Press Start 2P', cursive;
  }
  
  .sidebar-btn {
    color: #222222;
    background: transparent;
    border: none;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
  }
  
  .sidebar-btn:hover,
  .sidebar-btn.active {
    background-color: #222222;
    color: white;
  }
  
  .logout-btn {
    margin-top: auto;
    border: 2px solid #222222;
    padding-top: 12px;
  }

  /* Sliding page */
  .slide-page {
    position: fixed;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background: #E89F48;
    border: #222222 4px solid;
    transition: left 1.1s ease;
    font-family: 'Press Start 2P', cursive;
    z-index: 10;
    padding: 20px;
  }

  .slide-page h1{
    font-family: 'Press Start 2P', cursive;
    display: flex;
    justify-content: center; /* horizontal center */
    align-items: center;     /* vertical center */
    height: 90vh;     
  }

  /* Pag visible na */
  .slide-page.show {
    left: -100%;
    border: #222222 4px solid;
    font-family: 'Press Start 2P', cursive;
    align-items: center;
  }
  </style>
  
