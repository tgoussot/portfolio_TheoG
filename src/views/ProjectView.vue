<template>
  <section class="section" data-aos="fade-up">
    <div class="stage-container">
      <h1 data-aos="fade-right">Mon stage</h1>
      <div class="stage-content">
        <div class="stage-section" data-aos="fade-up">
          <h2>Présentation du sujet</h2>
          <p>
            Le projet consiste en une refonte totale de la médiathèque des postes source<span class="tooltip"><sup>1</sup>
              <span class="tooltiptext">
                <div class="tooltip-content">
                  <span>
                    Un poste source est une installation électrique où la très haute tension est transformée en haute tension pour être distribuée par Enedis
                  </span>
                  <img src="https://echo-drome-ardeche.com/wp-content/uploads/2021/07/enedis-2.jpg" alt="Poste source" class="tooltip-image">
                </div>
              </span>
            </span>
            du service de l’AIS (Agence d’Intervention Spécialisée) pour la DR AFC (Direction Régionale Alsace Franche-Comté).
            L’application originale, développée il y a environ 5 ans est devenue obsolète et n’a jamais été maintenue.
            La migration vers de nouveaux serveurs et les nouvelles exigences de sécurité d’Enedis imposent une mise à jour.
            Une simple remise en état demanderait beaucoup de travail sans garantir une maintenance efficace à long terme.
            Ainsi, une refonte totale a été décidée pour garantir une application moderne, maintenable et conforme aux exigences actuelles.
          </p>
        </div>
        <div class="stage-section" data-aos="fade-up">
          <h2>Objectif du Projet</h2>
          <div class="cards-container">
            <div class="card" data-aos="fade-up" data-aos-delay="100">
              <h3>Modernité</h3>
              <ul>
                <li>Mise en conformité aux normes d’Enedis, en utilisant Symfony pour le développement (langage actuellement préconisé pour une application WEB chez Enedis)</li><br>
                <li>Respect de la charte graphique d’Enedis.</li>
              </ul>
            </div>
            <div class="card" data-aos="fade-up" data-aos-delay="200">
              <h3>Fonctionnalités Améliorées</h3>
              <ul>
                <li>Correction des bugs existants</li><br>
                <li>Ajout de nouvelles fonctionnalités, telles que le remplacement de l’authentification manuelle par un système de connexion GARDIAN (système de connexion interne à Enedis)</li>
              </ul>
            </div>
            <div class="card" data-aos="fade-up" data-aos-delay="300">
              <h3>Ergonomie</h3>
              <ul>
                <li>Assurer une utilisation simple et ergonomique pour les techniciens.</li>
              </ul>
            </div>
            <div class="card" data-aos="fade-up" data-aos-delay="400">
              <h3>Maintenabilité</h3>
              <ul>
                <li>Faciliter la maintenance future de l’application.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stage-section" data-aos="fade-up">
          <h2>Contraintes</h2>
          <div class="cards-container">
            <div class="card" data-aos="fade-up" data-aos-delay="100">
              <h3>Contraintes de temps</h3>
              <p>Le projet doit être réalisé avant la migration prévue pour le 15 octobre.</p>
            </div>
            <div class="card" data-aos="fade-up" data-aos-delay="200" >
              <h3>Contraintes techniques</h3>
              <p>La migration vers de nouveaux serveurs nécessite le respect des nouvelles normes de sécurité d’Enedis et l’utilisation d’outils de développement autorisés et préconisés.</p>
            </div>
            <div class="card" data-aos="fade-up" data-aos-delay="300" >
              <h3>Défis importants</h3>
              <p>Assurer la continuité du service pendant la migration, sans interruption pour les utilisateurs actuels.</p>
            </div>
          </div>
        </div>
        <div class="stage-section" data-aos="fade-up">
          <h2>Conclusion</h2>
          <div class="text-container">
            <p>
          <span class="highlight bold">
            Ce projet permet de moderniser une application utilisée au quotidien par 80 techniciens de l’AIS dans la DR AFC, tout en assurant sa maintenabilité future et sa conformité aux nouvelles exigences.
          </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'StageView',
  mounted() {
    // Initialize AOS library
    AOS.init();
  }
}
</script>

<style scoped>
.section {
  padding: 50px;
  margin: 50px 0;
  background: #1E1E1E;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stage-container {
  text-align: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #BB86FC;
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #BB86FC;
}

.stage-content {
  text-align: left;
  max-width: 800px;
  margin: 20px auto;
}

.stage-section {
  margin-bottom: 30px; /* Add margin-bottom to create space between sections */
  padding: 20px;
  background: #2C2C2C;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #E0E0E0;
}

.conclusion-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.conclusion-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-left: 5px solid #BB86FC;
  background: #2C2C2C;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.conclusion-item v-icon {
  margin-right: 10px;
  color: #BB86FC;
  font-size: 2em;
}

.conclusion-item p {
  font-size: 1.1em;
  line-height: 1.6;
  color: #E0E0E0;
  margin: 0;
}

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: #BB86FC; /* Change the color of the tooltip trigger to match the theme */
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 500px; /* Increase the width for better readability */
  background-color: #333; /* Darker background for better contrast */
  color: #fff;
  text-align: center; /* Center text */
  border-radius: 8px; /* More rounded corners */
  padding: 10px; /* More padding for better spacing */
  position: absolute;
  z-index: 1;
  bottom: 150%; /* Position the tooltip above the text */
  left: 50%;
  margin-left: -250px; /* Adjusted for new width */
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adding shadow for depth */
  display: flex;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent; /* Arrow color matching the tooltip background */
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .tooltip-content {
  display: flex;
  align-items: center; /* Center items vertically */
  text-align: center; /* Center text */
  width: 100%;
}

.tooltip .tooltip-content span {
  flex: 1;
  margin-right: 10px; /* Add margin to separate text from image */
}

.tooltip .tooltip-image {
  width: 200px; /* Increase the width of the image */
  height: auto;
  border-radius: 4px;
}

.conclusion-content ul {
  list-style-type: disc; /* Type de puce */
  padding-left: 20px; /* Marge à gauche pour la liste */
}

.conclusion-content li {
  font-size: 1.1em;
  line-height: 1.6;
  color: #E0E0E0;
  margin-bottom: 10px; /* Espacement entre les éléments de la liste */
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #2E2E2E;
  padding: 20px;
  border-radius: 8px;
  width: calc(50% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card h3 {
  color: #BB86FC;
  margin-bottom: 10px;
}

.card ul {
  color: #E0E0E0;
  list-style-type: disc;
  padding-left: 20px;
}

.text-container p span.highlight {
  color: #BB86FC; /* Couleur différente pour les parties importantes */
}

.text-container p span.bold {
  font-weight: bold;
}
</style>