<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div class="row justify-content-center mb-3">
        <button class="btn btn-danger col-12" @click="separator">
          Listar Resultados
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
      valores: ["primeiro", "segundo", "terceiro", "quarto"],
      pares: [],
      impares: [],
      temp: '',
    };
  },
  methods: {
    separator() {
      for (let i = 0; i < 4; i++) {
        this.temp = parseInt(prompt(`Digite o ${this.valores[i]} valor`));
        while (isNaN(this.temp)) {
          this.temp = parseInt(
            prompt(
              `Digite o ${this.valores[i]} valor, e necessario que seja um numero`
            )
          );
        }
        this.numbers.push(this.temp)
      }
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] % 2 == 0) {
          this.numbers[i] < 0
            ? this.pares.push(null)
            : this.pares.push(this.numbers[i]);
        } else {
          this.numbers[i] < 0
            ? this.impares.push(null)
            : this.impares.push(this.numbers[i]);
        }
      }

      this.pares.sort(function (a, b) {
        return a - b;
      });
      this.impares.sort(function (a, b) {
        return a - b;
      });

      console.log("Lista de todos os numeros", this.numbers)
      console.log("Lista de numeros pares", this.pares)
      console.log("Lista de numeros impares", this.impares)
    },
  },
};
</script>
