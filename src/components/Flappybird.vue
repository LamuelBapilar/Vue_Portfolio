<template>
    <div class="">
      <canvas ref="canvas" width="400" height="600"></canvas>
      <div>
        <button @click="startGame">Start</button>
        <p>Score: {{ score }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        canvas: null,
        ctx: null,
        birdY: 300,
        birdVelocity: 0,
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
        this.birdY = 300;
        this.birdVelocity = 0;
        this.pipes = [];
        this.frame = 0;
        this.score = 0;
        this.gameRunning = true;
        window.addEventListener("keydown", this.flap);
        this.loop();
      },
      flap(e) {
        if (e.code === "Space") this.birdVelocity = -8;
      },
      loop() {
        this.update();
        this.draw();
        if (this.gameRunning) this.loopId = requestAnimationFrame(this.loop);
      },
      update() {
        this.birdVelocity += this.gravity;
        this.birdY += this.birdVelocity;
        this.frame++;
  
        // Pipes every 100 frames
        if (this.frame % 100 === 0) {
          const pipeTop = Math.random() * 300 + 50;
          this.pipes.push({ x: 400, top: pipeTop });
        }
  
        // Move pipes
        this.pipes.forEach(pipe => pipe.x -= 2);
  
        // Remove offscreen pipes
        this.pipes = this.pipes.filter(pipe => pipe.x + this.pipeWidth > 0);
  
        // Collision
        for (const pipe of this.pipes) {
          if (
            50 < pipe.x + this.pipeWidth &&
            50 + 20 > pipe.x &&
            (this.birdY < pipe.top || this.birdY + 20 > pipe.top + this.pipeGap)
          ) {
            this.gameOver();
          }
          if (pipe.x + this.pipeWidth === 50) this.score++;
        }
  
        // Ground / Ceiling
        if (this.birdY > 580 || this.birdY < 0) this.gameOver();
      },
      draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, 400, 600);
  
        // Bird
        ctx.fillStyle = "yellow";
        ctx.fillRect(50, this.birdY, 20, 20);
  
        // Pipes
        ctx.fillStyle = "green";
        this.pipes.forEach(pipe => {
          ctx.fillRect(pipe.x, 0, this.pipeWidth, pipe.top);
          ctx.fillRect(pipe.x, pipe.top + this.pipeGap, this.pipeWidth, 600);
        });
      },
      gameOver() {
        this.gameRunning = false;
        cancelAnimationFrame(this.loopId);
        window.removeEventListener("keydown", this.flap);
        alert("Game Over! Score: " + this.score);
      },
    },
  };
  </script>
  
  <style scoped>
  .game-container {
    text-align: center;
    margin-top: 20px;
  }
  canvas {
    border: 1px solid black;
  }
  </style>
  