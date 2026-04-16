<template>
  <div class="d-flex">
    <Sidebar />

    <div class="flex-grow-1 p-3 bg-yellow-format">

      <div class="contact-title">
        <h3>Contact Me</h3>
      </div>

      <div class="contact-info">
        <p><strong>Email:</strong> lamuelbapilar@gmail.com</p>
        <p><strong>Phone:</strong> 09515443181</p>
      </div>

      <div class="comment-section scroll-container">
        <h5>Messages</h5>

        <div v-if="messages.length === 0" class="comment-box">
          No messages yet.
        </div>

        <div
  v-for="(msg, i) in messages.slice().sort((a, b) => b.timestamp - a.timestamp)"
  :key="i"
  class="comment-box animate"
>
  {{ msg.text }}
</div>

      </div>

      <div class="comment-input d-flex gap-2">
        <textarea
          v-model="newMessage"
          class="form-control"
          placeholder="Type your message..."
          rows="3"
        ></textarea>

        <button class="btn send-btn" @click="sendMessage">
          Send
        </button>
      </div>

      <audio ref="sendSound" src="./sent.mp3"></audio>

    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: "Contact",
  components: { Sidebar },
  data() {
    return {
      newMessage: "",
      messages: []
    }
  },
  mounted() {
    const saved = localStorage.getItem("messages")
    if (saved) this.messages = JSON.parse(saved)
  },
  methods: {
    sendMessage() {
  if (!this.newMessage.trim()) return

  const message = {
    text: this.newMessage,
    timestamp: Date.now()
  }

  this.messages.push(message)
  localStorage.setItem("messages", JSON.stringify(this.messages))
  this.newMessage = ""
  const sound = new Audio('./sfx/sent.mp3')
  sound.volume = 0.5
  sound.play()
}

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.bg-yellow-format {
  background-color: #E89F48;
  color: #222222;
  font-family: 'Press Start 2P', cursive;
  min-height: 100vh;
}

.contact-title {
  border-bottom: 4px solid #222222;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
}

.contact-info {
  border: 4px solid #222222;
  border-radius: 10px;
  padding: 1vh;
  margin-bottom: 2vh;
}

.comment-section {
  border: 4px solid #222222;
  border-radius: 10px;
  padding: 1vh;
  margin-bottom: 2vh;
  height: 55vh;      
  overflow-y: scroll;
}

.comment-box {
  background-color: #E89F48;
  border: 2px solid #222222;
  border-radius: 5px;
  padding: 1vh;
  margin-bottom: 1vh;
  font-size: 1.5vh;
  max-width: 100%;      
  white-space: pre-wrap; 
  word-break: break-word; 
  overflow-wrap: break-word;
}

.comment-input textarea {
  background-color: #E89F48;
  border: 4px solid #222222;
  resize: none;
  font-size: 1.5vh;
}

.send-btn {
  background-color: #222222;
  color: white;
  padding: 0 20px;
}

.send-btn:hover {
  background-color: black;
}

.animate {
  animation: pop 0.25s ease-out;
}

@keyframes pop {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}


.scroll-container {
  overflow: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}

.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
