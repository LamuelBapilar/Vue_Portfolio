<template>
  <body>
  <div class="d-flex">
    <Sidebar />
    
  
    <div class="flex-grow-1 p-3 bg-yellow-format">

      <div class="specimen-holder">
        <h3>Specimen #1: Bapilar, Lamuel Joseph D</h3>
        <p>Web Developer | Game Developer </p>
      </div>

      <div class="profile">
        <div class="profilepic-holder">
          <img src="../images/hazamat_pic.png" alt="Hazmat"/>
        </div>

       
        <div class="profilebackground-holder">
          <h5>Backgroud:</h5>
          <p>Hello! I'm Lamuel Joseph D. Bapilar, a passionate web and game developer. I love creating interactive and engaging digital experiences. In my free time, I enjoy exploring new technologies and enhancing my skills. Let's connect and build something amazing together!</p>
        </div>
      </div>  

      <div style="display: flex;">
      <div class="profileinfo-holder">
        <h5>Info:</h5>
        <p><strong>Location:</strong></p>
        <p>·De Gloria St. Talanay Area B BHQC</p>
        <p><strong>Email:</strong></p>
        <p>·lamuelbapilar@gmail.com</p>
        <p><strong>Number:</strong></p>
        <p>·09515443181</p>
        <p><strong>Education:</strong></p>
        <p>·BS in Computer Engineering</p>
        <p><strong>Portfolio:</strong></p>
        <p>·https://github.com/LamuelBapilar</p>
      </div>
      <div style="display: column;">
        <div class="profileskill-holder">
          <h5>Skills:</h5>
          <p><strong>FrontEnd:</strong></p>
          <p>·HTML, CSS, JavaScript, React, Vue.js</p>
          <p><strong>BackEnd:</strong></p>
          <p>·Node.js, PHP, MySQL, Firebase</p>
        </div>
        <div class="profileskill-holder">
          <h5>Expirience:</h5>
          <p>·6 month intership as React Developer in LexMeet</p>
          <p>·Software Developer For Two Thesis (Gencycle and Breasy)</p>
          <P>·Expirience in Mobile App and Game Development (Godot)</P>
          <p></p>
        </div>
      </div>
       </div> 
       </div>

    </div>
  </body>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: "Contact",
  components: { Sidebar }
};
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

.bg-yellow-format {
  background-color: #E89F48;
  color: #222222;
  font-family: 'Press Start 2P', cursive;
}

.specimen-holder{
  border-bottom: #222222 4px solid;
}

.profile{
  display: flex;
}

.profilepic-holder{
  margin-top: 2vh;
  border: #222222 4px solid;
  border-radius: 10px;
  width: 10vw;
  height: 20vh;
  overflow: hidden;
  background-color: #E89F48;
}

.profilepic-holder img{
  width: 100%; 
  height: 100%; 
  object-fit: cover;
}

.profilebackground-holder{
  margin-top: 2vh;
  margin-left: 2vw;
  border: #222222 4px solid;
  border-radius: 10px;
  padding: 1vh;
  width: 67vw;
  height: 20vh;
  background-color: #E89F48;
}

.profilebackground-holder p{
  font-size: 1.5vh;
  text-align: justify;
}

.profileinfo-holder{
  margin-top: 2vh;
  border: #222222 4px solid;
  border-radius: 10px;
  padding: 1vh;
  width: 33vw;
  height: 56vh;
  background-color: #E89F48;
}

.profileinfo-holder p{
  font-size: 1.7vh;
  text-align: justify;
}

.profileskill-holder{
  margin-left: 2vw;
  margin-top: 2vh;
  border: #222222 4px solid;
  border-radius: 10px;
  padding: 1vh;
  width: 44vw;
  height: 27vh;
  background-color: #E89F48;
}

.profileskill-holder p{
  font-size: 1.7vh;
  text-align: justify;
}

.d-flex {
  min-height: 100vh; /* full screen height */
}
</style>
