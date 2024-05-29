<template>
  <section id="about" class="section" data-aos="fade-up">
    <div class="about-container">
      <img src="@/assets/profile.webp" alt="Profile Picture" class="profile-img">
      <div class="text-container">
        <h1>Qui suis-je ?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos in incidunt sit vitae voluptate. Aut blanditiis corporis eos eum impedit in inventore non optio, provident quasi saepe, soluta tenetur veritatis.</p>
      </div>
    </div>
    <div class="skills-container">
      <h2>Compétences</h2>
      <div class="skills-grid">
        <div class="skill">
          <v-icon color="accent">mdi-language-javascript</v-icon>
          <span>JavaScript</span>
          <v-progress-linear color="accent" value="90" height="10"></v-progress-linear>
        </div>
        <div class="skill">
          <v-icon color="accent">mdi-language-html5</v-icon>
          <span>HTML & CSS</span>
          <v-progress-linear color="accent" value="85" height="10"></v-progress-linear>
        </div>
        <div class="skill">
          <v-icon color="accent">mdi-language-python</v-icon>
          <span>Python</span>
          <v-progress-linear color="accent" value="80" height="10"></v-progress-linear>
        </div>
        <div class="skill">
          <v-icon color="accent">mdi-vuejs</v-icon>
          <span>Vue.js</span>
          <v-progress-linear color="accent" value="75" height="10"></v-progress-linear>
        </div>
        <div class="skill">
          <v-icon color="accent">mdi-database</v-icon>
          <span>SQL</span>
          <v-progress-linear color="accent" value="70" height="10"></v-progress-linear>
        </div>
        <div class="skill">
          <v-icon color="accent">mdi-coffee</v-icon>
          <span>Java</span>
          <v-progress-linear color="accent" value="65" height="10"></v-progress-linear>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.section {
  padding: 50px;
  margin: 20px auto;
  max-width: 800px;
  background: #1E1E1E;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.profile-img:hover {
  transform: scale(1.1);
}

.text-container {
  flex: 1;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #BB86FC;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #E0E0E0;
  animation: fadeIn 2s ease-in;
}

.skills-container {
  margin-top: 40px;
}

h2 {
  font-size: 2em;
  color: #BB86FC;
  margin-bottom: 20px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.skill {
  flex: 1 1 45%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill v-icon {
  font-size: 2em;
  margin-bottom: 5px;
}

.skill span {
  display: block;
  font-size: 1.1em;
  color: #E0E0E0;
  margin-bottom: 5px;
}

v-progress-linear {
  width: 100%;
  height: 12px !important;
  border-radius: 5px;
  background-color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>