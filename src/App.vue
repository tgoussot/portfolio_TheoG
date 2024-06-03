<template>
  <v-app dark>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="scrollTo('about')">Qui suis-je ?</v-btn>
      <v-btn text @click="scrollTo('projects')">Mon projet de stage</v-btn>
      <v-btn text @click="scrollTo('skills')">Compétence 1</v-btn>
      <v-btn text @click="scrollTo('contact')">Compétence 5</v-btn>
    </v-app-bar>

    <v-main @scroll="startObserving">
      <div class="page" id="about" ref="about">
        <div class="page-content">
          <AboutView />
        </div>
      </div>
      <div class="page" id="projects" ref="projects">
        <div class="page-content">
          <ProjectsView />
        </div>
      </div>
      <div class="page" id="skills" ref="skills">
        <div class="page-content">
          <Competence1View />
        </div>
      </div>
      <div class="page" id="contact" ref="contact">
        <div class="page-content">
          <Competence5View />
        </div>
      </div>
      <div ref="bottomRef" style="height: 1px; width: 100%;"></div>
    </v-main>

    <Footer v-show="showFooter" />
  </v-app>
</template>

<script>
import Footer from '@/components/FooterComponent.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectView.vue';
import Competence1View from '@/views/Competence1View.vue';
import Competence5View from "@/views/ContactView.vue";

export default {
  name: 'App',
  components: {
    Competence5View,
    Competence1View,
    Footer,
    AboutView,
    ProjectsView
  },
  data() {
    return {
      showFooter: false,
      observer: null,
      sectionObservers: {},
      hasStartedObserving: false
    };
  },
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 130; // Adjusted offset value to match the height of your navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    createObserver(section) {
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('flipped');
              } else {
                entry.target.classList.remove('flipped');
              }
            });
          },
          { threshold: 0.5 }
      );
      observer.observe(section);
      return observer;
    },
    observeSections() {
      this.sectionObservers.about = this.createObserver(this.$refs.about);
      this.sectionObservers.projects = this.createObserver(this.$refs.projects);
      this.sectionObservers.skills = this.createObserver(this.$refs.skills);
      this.sectionObservers.contact = this.createObserver(this.$refs.contact);
    },
    observeBottom() {
      this.$nextTick(() => {
        const bottomRef = this.$refs.bottomRef;
        if (bottomRef) {
          this.observer = new IntersectionObserver(
              ([entry]) => {
                this.showFooter = entry.isIntersecting;
              },
              { threshold: 0.1 }
          );
          this.observer.observe(bottomRef);
        }
      });
    },
    startObserving() {
      if (!this.hasStartedObserving) {
        this.observeSections();
        this.hasStartedObserving = true;
      }
    }
  },
  mounted() {
    this.observeBottom();
    this.scrollToTop();
  },
  beforeDestroy() {
    Object.values(this.sectionObservers).forEach(observer => observer.disconnect());
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';

.page {
  /* height: 100vh; */ /* Commenter ou supprimer */
  min-height: 100vh; /* Utiliser min-height pour permettre l'expansion */
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
  transform-style: preserve-3d;
  position: relative;
  transition: transform 1s, opacity 1s;
}

.page.flipped {
  transform: rotateX(-90deg);
  opacity: 0;
}

.page-content {
  backface-visibility: hidden;
  width: 100%;
  /* height: 100%; */ /* Commenter ou supprimer */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s, transform 1s;
}
</style>