<template>
<div class="d-flex">
    <Sidebar />

    <div class="flex-grow-1 p-3 bg-yellow-format">
    <div class="showcase-title">
        <h3>Creative</h3>
      </div>
      <div style="display: flex; gap: 2vw; flex-wrap: wrap;">
      <div class="game-container">
        <h5>Blocky Bird</h5>
        <canvas ref="canvas" width="500" height="490"></canvas>
       
      </div>
      <div class="info-container" style="align-items:center;">
        <h1>Score: {{ score }}</h1>
        <button @click="startGame" :disabled="gameRunning">Start Game</button>
        <h5 style="padding-top: 2vh;">press space to jump</h5>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
// import your sidebar
import Sidebar from './Sidebar.vue';

export default {
  components: { Sidebar },

  data() {
    return {
      canvas: null,
      ctx: null,
      bird: { x: 50, y: 300, width: 20, height: 20, velocity: 0 },
      gravity: 0.5,
      pipes: [],
      pipeWidth: 50,
      pipeGap: 150,
      frame: 0,
      score: 0,
      gameRunning: false,
      loopId: null,
    };
  },

  methods: {
    startGame() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");

      // Reset
      this.bird.y = 300;
      this.bird.velocity = 0;
      this.pipes = [];
      this.frame = 0;
      this.score = 0;
      this.gameRunning = true;

      window.addEventListener("keydown", this.flap);
      this.loop();
    },

    flap(e) {
      if (e.code === "Space") {
        const sound = new Audio('/sfx/spring.mp3')
          sound.volume = 0.5
          sound.play()
        this.bird.velocity = -8;}
    },

    loop() {
      this.update();
      this.draw();
      if (this.gameRunning) this.loopId = requestAnimationFrame(this.loop);
    },

    update() {
      this.frame++;
      this.bird.velocity += this.gravity;
      this.bird.y += this.bird.velocity;

      if (this.frame % 100 === 0) {
        const pipeTop = Math.random() * 300 + 50;
        this.pipes.push({ x: 500, top: pipeTop, passed: false });
      }

      this.pipes.forEach(pipe => (pipe.x -= 2));
      this.pipes = this.pipes.filter(pipe => pipe.x + this.pipeWidth > 0);

      for (const pipe of this.pipes) {
        if (
          this.bird.x < pipe.x + this.pipeWidth &&
          this.bird.x + this.bird.width > pipe.x &&
          (this.bird.y < pipe.top || this.bird.y + this.bird.height > pipe.top  + this.pipeGap)
        ) {
          this.gameOver();
        }

        if (!pipe.passed && pipe.x + this.pipeWidth < this.bird.x) {
          this.score++;
          pipe.passed = true;
          const sound = new Audio('/sfx/sent.mp3')
          sound.volume = 0.5
          sound.play()
        }
      }

      if (this.bird.y + this.bird.height > this.canvas.height || this.bird.y < 0) {
        this.gameOver();
      }
    },

    draw() {
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      ctx.fillStyle = "#222222";
      ctx.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height);

      ctx.fillStyle = "#222222";
      this.pipes.forEach(pipe => {
        ctx.fillRect(pipe.x, 0, this.pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.top + this.pipeGap, this.pipeWidth, this.canvas.height - (pipe.top + this.pipeGap));
      });
    },

    gameOver() {
      this.gameRunning = false;
      cancelAnimationFrame(this.loopId);
      window.removeEventListener("keydown", this.flap);
      const sound = new Audio('/sfx/receipt.mp3')
      sound.volume = 0.5
      sound.play()
      alert("Game Over! Score: " + this.score);
    },
  },
};
</script>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


.bg-yellow-format {
  background-color: #E89F48;
  color: #222222;
  font-family: 'Press Start 2P', cursive;
  min-height: 100vh;
}

.showcase-title {
  border-bottom: 4px solid #222222;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
}


.app-container {
  display: flex;
  font-family: 'Press Start 2P', cursive;
}

.showcase-title {
  border-bottom: 4px solid #222222;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
}

.main-content {
  display: flex;
}

.game-container {
  display: column;
}

.info-container {
  justify-content: center;
  align-items: center;
  padding-top: 30vh;
}



canvas {
  border: 4px solid black;
  background-color: #E89F48;
  border-radius: 10px;
}

button {
  background-color: #E89F48;
  border: 4px solid #222222;
  border-radius: 10px;
  font-family: 'Press Start 2P', cursive;
  font-size: 2vw;
}


</style>
