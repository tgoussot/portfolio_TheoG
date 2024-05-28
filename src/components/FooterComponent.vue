<template>
  <v-footer color="secondary" app>
    <v-row class="text-center white--text" justify="center" align="center" no-gutters>
      <v-col cols="12" class="d-flex align-center justify-center py-1">
        <span class="footer-text">Théo GOUSSOT A2</span>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center py-1">
        <span class="footer-text">Créer avec le <span>&nbsp;</span><v-icon small class="red--text">mdi-heart</v-icon></span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {
    goTo(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.v-footer {
  padding: 10px 0;
  background: linear-gradient(45deg, #1E1E1E, #121212);
}

.icon-button {
  transition: color 0.3s ease;
}

.icon-button:hover {
  transform: scale(1.1);
  color: #BB86FC;
}

.v-icon {
  font-size: 30px;
  display: flex;
  align-items: center;
  animation: fadeIn 2s ease-in;
}

.footer-text {
  margin: 0;
  font-size: 16px;
  animation: fadeIn 2s ease-in;
  display: flex;
  align-items: center;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>