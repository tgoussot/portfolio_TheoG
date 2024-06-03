<template>
  <section id="about" class="section" data-aos="fade-up">
    <div class="about-container">
      <img src="@/assets/profile.webp" alt="Profile Picture" class="profile-img">
      <div class="text-container">
        <h1>Qui suis-je ?</h1>
        <p>Bonjour, je suis <span class="highlight bold">Théo GOUSSOT</span>.</p>
        <p>Étudiant en <span class="highlight">2ème année de BUT Informatique</span>, je réalise actuellement un stage de 3 mois chez Enedis en tant que développeur web.</p>
        <p>Je suis motivé, curieux et toujours à la recherche des dernières tendances en informatique.</p>
        <p>Mon objectif est de devenir <span class="highlight">développeur web Full-Stack</span>.</p>
      </div>
    </div>
    <div class="skills-container">
      <h2>Compétences</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <v-icon color="accent">mdi-language-javascript</v-icon>
          <div class="skill-info">
            <h3>JavaScript</h3>
            <p>Utilisé dans la majorité de mes projets <br>(ex : réalisation d’une carte Leaflet)</p>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="accent">mdi-language-html5</v-icon>
          <div class="skill-info">
            <h3>HTML & CSS</h3>
            <p>Utilisés dans tous mes projets lors de ma 1ère année en BUT Informatique<br>(ex : réalisation d’un site e-commerce)</p>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="accent">mdi-language-php</v-icon>
          <div class="skill-info">
            <h3>PHP & Symfony</h3>
            <p>Appris pendant mon stage, utilisés uniquement dans mon projet de stage</p>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="accent">mdi-vuejs</v-icon>
          <div class="skill-info">
            <h3>Vue.js 2.0</h3>
            <p>Utilisé pour tous mes projets lors de ma 2ème année de BUT Informatique<br>(ex : <a href="https://tpserviceweb.vercel.app" class="custom-link" target="_blank">voir ici</a>)</p>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="accent">mdi-database</v-icon>
          <div class="skill-info">
            <h3>SQL</h3>
            <p>Utilisé dans l’ensemble de mes projets de 1ère année de BUT Informatique ainsi que dans la majorité de mes projets de 2ème année</p>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="accent">mdi-nodejs</v-icon>
          <div class="skill-info">
            <h3>NodeJS</h3>
            <p> Utilisé pour tous mes projets de 2ème année de BUT Informatique <br>(ex : utilisation du framework Express pour la réalisation d'API)</p>
          </div>
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

.text-container p {
  margin-bottom: 15px;
}

.text-container p {
  font-size: 1.1em;
}

.text-container p {
  color: #E0E0E0;
}
.text-container p span.highlight {
  color: #BB86FC; /* Couleur différente pour les parties importantes */
}

.text-container p span.bold {
  font-weight: bold;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #2C2C2C;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.skill-card v-icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.skill-info {
  text-align: center;
}

.skill-info h3 {
  font-size: 1.5em;
  color: #BB86FC;
  margin: 10px 0 5px;
}

.skill-info p {
  font-size: 1em;
  color: #E0E0E0;
}

.custom-link {
  color: #BB86FC; /* Utilise la couleur d'accent de ton thème */
  text-decoration: none; /* Retire la soulignure par défaut */
}

.custom-link:hover {
  text-decoration: underline; /* Ajoute une soulignure au survol */
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