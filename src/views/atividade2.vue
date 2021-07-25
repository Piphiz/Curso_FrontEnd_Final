<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div class="row justify-content-center mb-3">
        <button class="btn btn-danger col-12" @click="baskhara">
          Calcular Baskhara
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
      values: ["ax²", "bx", "c"],
      inputs: [],
    };
  },
  methods: {
    baskhara() {
      for (var i = 0; i < 3; i++) {
        this.inputs[i] = parseInt(
          prompt(`Digite um valor para ${this.values[i]}`)
        );
        while (isNaN(this.inputs[i])) {
          this.inputs[i] = parseInt(
            prompt(`Digite um valor valido para ${this.values[i]}`)
          );
        }
      }
      let delta = Math.sqrt(
          this.inputs[1] * this.inputs[1] - 4 * this.inputs[0] * this.inputs[2]
        );

        let x1 = (-this.inputs[1] + delta) / (2 * this.inputs[0]);
        let x2 = (-this.inputs[1] - delta) / (2 * this.inputs[0]);

        if (isNaN(delta)) {
          console.log("Nao possui raiz real, afinal o delta e negativo");
        } else {
          if (x1 == x2) {
            console.log(
              "So possui uma raiz real, pois so toca o eixo X em um ponto",
              x1
            );
          } else {
            console.log("As raizes x' e x'' sao respectivamente", x1, x2);
          }
        }
    },
  },
};
</script>
