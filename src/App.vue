<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/projects">Projects</v-btn>
      <v-btn text to="/skills">Skills</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
  components: {FooterComponent}
}
</script>

<style>
  @import '~vuetify/dist/vuetify.min.css';
</style>