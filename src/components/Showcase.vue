<template>
  <div class="d-flex">
    <Sidebar />

    <div class="flex-grow-1 p-3 bg-yellow-format">

      <div class="showcase-title">
        <h3>My Showcase</h3>
      </div>

      <div id="showcaseCarousel" class="carousel slide mb-3" data-bs-ride="carousel">
        <div class="carousel-inner" style="height: 63vh;">

          <div 
            class="carousel-item" 
            v-for="(slide, index) in slides" 
            :key="index" 
            :class="{ active: index === 0 }"
          >
            <div class="d-flex justify-content-center align-items-center h-100 flex-wrap">
              <img 
                v-for="(img, i) in slide.images" 
                :key="i" 
                :src="img" 
                class="d-block m-2 showcase-img" 
                alt="Work image"
              />
            </div>
          </div>

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#showcaseCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#showcaseCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div class="slide-description p-3 rounded">
        <p>{{ slides[currentSlide].description }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'

export default {
  name: "Showcase",
  components: { Sidebar },
  data() {
    return {
      slides: [
        {
          images: [
            '/tips-eats1.png',
             '/tips-eats2.png'
          ],
          description: "Tips & Eats: is a social media platform where people can post food, share orders, and follow recipes from creators around the country. It helps users discover local dishes while supporting nearby stores and food sellers."
        },
        {
          images: [
            '/bresy.png',
            '/bresy2.png'
          ],
          description: "Breasy: smart portable nebulizer device paired with a mobile app that tracks breathing sessions and health data in real time. It is designed to be lightweight, rechargeable, and solar-powered."
        },
        {
          images: [
            '/game1.png',
            '/game3.png'
          ],
          description: "LOCKDOWN: Manila: You enter dangerous areas to loot, survive enemy encounters, and escape before the raid ends. Every run is a risk. Get out alive, sell what you looted, and make a profit. In Manila, only smart looters make it home."
        }
      ],
      currentSlide: 0
    }
  },
  mounted() {
    const carousel = document.getElementById('showcaseCarousel')
    carousel.addEventListener('slid.bs.carousel', () => {
      const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item =>
        item.classList.contains('active')
      )
      this.currentSlide = activeIndex
    })
  }
}
</script>

<style scoped>
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

.showcase-img {
  width: 37vw;  /* increased from 250px */
  height: 60vh; /* increased from 150px */

  object-fit: cover;
  border: 4px solid #222222;
  border-radius: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 2vw;    /* smaller buttons */
  height: 70vh;
}

.slide-description {
  border: 4px solid #222222 !important;
  background-color: #E89F48;
  font-size: 2vh;
  text-align: justify;
}
</style>
