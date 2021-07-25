<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div class="row justify-content-center mb-3">
        <button class="btn btn-danger col-12" @click="calcSalaryIncrease">
          Calcular Aumento
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
        name: '',
        salary: '',
        percent: '',
        newsal: '',
    };
  },
  methods: {
    calcSalaryIncrease() {
    this.nome = prompt("Digite seu nome:")
    this.salario = prompt("Digite seu salario:")
    this.perc = prompt("Digite o percentual de aumento:")
    this.newsal = (parseFloat(this.salario)*(parseFloat(this.perc)/100+1)).toFixed(2)
    
    if(this.newsal > 5000){
        console.log(`Ola ${this.nome}, seu novo salario e ${this.newsal}`)
    }else{
        console.log("Parabens pelo aumento")
    }
    },
  },
};
</script>
