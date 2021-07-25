<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div
        id="square1"
        class="square col mr-3 rounded-xl"
        @click="sumclick(1)"
      ></div>
      <div
        id="square2"
        class="square col mr-3 rounded-xl"
        @click="sumclick(2)"
      ></div>
      <div
        id="square3"
        class="square col rounded-xl"
        @click="sumclick(3)"
      ></div>
    </v-row>
    <h2>Abra o console log para ver os resultados</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clicks: [0, 0, 0],
    };
  },
  methods: {
    sumclick(id) {
      if (this.clicks[id - 1] === 0) {
        console.log(
          `Voce clicou ${++this.clicks[id - 1]} vez no quadrado ${id}`
        );
      } else {
        console.log(
          `Voce clicou ${++this.clicks[id - 1]} vezes no quadrado ${id}`
        );
      }
    },
  },
};
</script>
