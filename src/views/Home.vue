<template>
  <div>
    <h1>
      Bem vindo, site feito com o intuito de obtenção do certificado referente
      ao curso de ferias de Vuetify/FrontEnd ministrado por Paulo Reis
    </h1>
    <h2 class="text-center mt-16">Desenvolvido por:</h2>
    <v-main class="align-center">
      <v-container class="d-flex justify-center">
        <div>
          <a :href="piphiz.html_url" style="text-decoration: none">
            <v-avatar size="200">
              <v-img :src="piphiz.avatar_url"></v-img>
            </v-avatar>
            <h2 class="text-center black--text">{{ piphiz.name }}</h2>
          </a>
        </div>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      piphiz: [],
    };
  },
  mounted() {
    this.loadProfiles();
  },
  methods: {
    loadProfiles() {
      axios.get("https://api.github.com/users/piphiz").then((response) => {
        this.piphiz = response.data;
      });
    },
  },
};
</script>
