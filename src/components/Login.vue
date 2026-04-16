
<template>
    <body>
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow p-4" style="width: 350px;">
        <h3 class="text-center mb-4">Welcome Human!</h3>
  
        <form @submit.prevent="login">
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="username" placeholder="Enter username"  required/>
          </div>
  
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Enter password"  required/>
          </div>
  
          <button type="submit" class="btn w-100">Login</button>
        </form>
      </div>
    </div>

    <div class="slide-page" :class="{ show: isClose }">
        <h1>Fetching Data...</h1>
    </div>

    </body>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    
    const router = useRouter()
    const route = useRoute()
    
    const isClose = ref(false)
    
    // Login form
    const username = ref("")
    const password = ref("")
    
    const user = "admin"
    const pass = "123"
    

    const login = () => {
      console.log("Username:", username.value)
      console.log("Password:", password.value)
    
      if (username.value !== user || password.value !== pass) {
        alert("user: admin pass: 123")
      } else {
        alert("Login successful! Welcome " + username.value)
    
        isClose.value = false
        const sound = new Audio('./sfx/receipt.mp3')
        sound.volume = 0.5
        sound.play()

        setTimeout(() => {
          router.push('/portfolio/profile')
        }, 1100)
      }
    }
    
    onMounted(() => {
      setTimeout(() => {
        isClose.value = true
      }, 200)
    })
    </script>
  
  
  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

    :root {
  --primary-color: #E89F48;
  --secondary-color: #FBEDBD;
  --white-text-color: #ECECEC;
  --black-text-color: #222222;
    }

    body{
      background-color: #E89F48;
    }

    .card {
      border-radius: 10px;
      border: #222222 4px solid;
      font-family: 'Press Start 2P', cursive;
      background-color: #E89F48;
    }

    .form-label{
      text-decoration: solid;
      font-family: 'Press Start 2P', cursive;
    }

    .form-control{
      text-decoration: solid;
      font-family: 'Press Start 2P', cursive;
      border: #222222 4px solid;
      background-color: #E89F48;
    }

    .btn {
      background-color: #222222;
      border: none;
      border-radius: 5px;
      color: #ECECEC;
      font-family: 'Press Start 2P', cursive;
    }
    
    .btn:hover {
      background-color: rgb(82, 81, 81);
    }

    .slide-page {
    position: fixed;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    background: #E89F48;
    border: #222222 4px solid;
    transition: left 1s ease;
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