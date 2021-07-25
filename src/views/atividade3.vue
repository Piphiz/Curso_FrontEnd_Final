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
      values: ["primeiro", "segundo", "terceiro", "quarto"],
      even: [],
      odd: [],
      temp: '',
    };
  },
  methods: {
    separator() {
      for (let i = 0; i < 4; i++) {
        this.temp = parseInt(prompt(`Digite o ${this.values[i]} valor`));
        while (isNaN(this.temp)) {
          this.temp = parseInt(
            prompt(
              `Digite o ${this.values[i]} valor, e necessario que seja um numero`
            )
          );
        }
        this.numbers.push(this.temp)
      }
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] % 2 == 0) {
          this.numbers[i] < 0
            ? this.even.push(null)
            : this.even.push(this.numbers[i]);
        } else {
          this.numbers[i] < 0
            ? this.odd.push(null)
            : this.odd.push(this.numbers[i]);
        }
      }

      this.even.sort(function (a, b) {
        return a - b;
      });
      this.odd.sort(function (a, b) {
        return a - b;
      });

      console.log("Lista de todos os numeros", this.numbers)
      console.log("Lista de numeros pares", this.even)
      console.log("Lista de numeros impares", this.odd)
    },
  },
};
</script>
