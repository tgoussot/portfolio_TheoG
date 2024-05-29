<template>
  <section id="stage" class="section" data-aos="fade-up">
    <div class="stage-container">
      <h2>Mon projet de stage</h2>
      <p>Décrivez ici votre projet de stage, les technologies utilisées, les défis rencontrés et les solutions apportées. Vous pouvez inclure des images, des extraits de code et des liens vers les dépôts GitHub pertinents.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StageView'
}
</script>

<style scoped>
.section {
  padding: 50px;
  margin: 20px 0;
  background: #1E1E1E;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.stage-container {
  text-align: center;
}

h2 {
  font-size: 2.5em;
  color: #BB86FC;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  color: #E0E0E0;
  max-width: 600px;
  margin: 0 auto;
}
</style>