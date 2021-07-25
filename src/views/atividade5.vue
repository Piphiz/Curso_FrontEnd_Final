<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div class="row justify-content-center mb-3">
        <button class="btn btn-danger col-12" @click="separator">
          Separar String
        </button>
      </div>
    </v-row>
    <h2>Abra o console log para ver os resultados</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numbers: [
        12, 3, 8, -2, 18, 5, 6, -1, 20, 30, 40, -20, 123, 11, -23, 32, 2,
      ],
      result: [[], []],
    };
  },
  methods: {
    separator() {
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] % 2 == 0) {
          this.result[1].push(this.numbers[i]);
        } else {
          this.result[0].push(this.numbers[i]);
        }
      }
      console.log(this.result);
    },
  },
};
</script>
