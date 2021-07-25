<template>
  <div class="row mt-5">
    <div class="row justify-content-center mb-3">
      <button class="btn btn-danger col-3" @click="showBonus">
        Mostrar Cards
      </button>
    </div>
    <div v-if="enable" class="row mt-5 justify-content-center">
      <div v-for="(data, index) of datas" :key="index" class="col-3">
        <div class="card">
          <div class="card-header text-center bg-danger text-white">
            Funcionario:
          </div>
          <div class="card-body">
            <h5 class="card-title">Dados</h5>
            <p>
              Nome: <span class="text-success">{{ data.nome }}</span>
            </p>
            <p>
              Total de Filhos:
              <span class="text-success">{{ data.filhos.length }}</span>
            </p>
            <p>
              Idade dos filhos:
              <span class="text-success">{{
                data.filhos.length == 0 ? "N/A" : getAges(data.filhos, index)
              }}</span>
            </p>
            <p>
              Bonificavel:
              <span class="text-success">{{
                bonus[index] > 0 ? "Sim" : "Nao"
              }}</span>
            </p>
          </div>
          <div class="card-footer text-center">
            Valor do Bonus:
            <span class="text-success"
              >R$ {{ bonus[index] > 0 ? bonus[index] : 0 }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ages: [],
      bonus: [],
      datas: [
        {
          nome: "Eduardo Berg",
          sexo: "M-Masculino",
          cursos: [
            {
              titulo: "Eng. da Computação",
              faculdade: "Unime",
              endereco: "Lauro de Freitas",
              ano: 2021,
            },
          ],
          filhos: [],
        },
        {
          nome: "Paulo",
          sexo: "F-Feminino",
          cursos: [
            {
              titulo: "Graduado em Computacao",
              faculdade: "Unime",
              endereco: "Lauro de Freitas",
              ano: 1120,
            },
            {
              titulo: "Mestrado em Computacao",
              faculdade: "Unime",
              endereco: "Lauro de Freitas",
              ano: 1640,
            },
            {
              titulo: "BSI",
              faculdade: "Unime",
              endereco: "Lauro de Freitas",
              ano: 2021,
            },
          ],
          filhos: [{ nome: "Pedro", idade: 9 }],
        },
        {
          nome: "Lucas Queiroz",
          sexo: "M-Masculino",
          cursos: [],
          filhos: [
            { nome: "Joao", idade: 8 },
            { nome: "Maria", idade: 17 },
            { nome: "Mariana", idade: 23 },
          ],
        },
      ],
      enable: false,
    };
  },
  methods: {
    showBonus() {
      this.enable = true;
    },
    getAges(childrens, value) {
      var temp = "";
      this.bonus[value] = 0;
      childrens.forEach((children, index) => {
        if (children.idade > 10 && children.idade <= 18) {
          this.bonus[value] += 50;
        }
        if (children.idade < 10) {
          this.bonus[value] += 70;
        }
        if (index === childrens.length - 1) {
          temp += children.idade;
        } else {
          temp += children.idade +', ';
        }
      });
      return temp;
    },
  },
};
</script>
