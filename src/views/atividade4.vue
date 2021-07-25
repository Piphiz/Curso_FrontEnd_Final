<template>
  <div>
    <v-row class="justify-content-center mb-3">
      <div class="row justify-content-center mb-3">
        <button class="btn btn-danger col-12" @click="listCourses">
          Listar Cursos
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
      employeers: [
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
    };
  },
  methods: {
    listCourses() {
      this.employeers.forEach((employee) => {
        if (employee.cursos.length > 0) {
          console.log(`${employee.nome} fez o(s) curso(s):`);
          employee.cursos.forEach((curso) => {
            console.log(
              `\t${curso.titulo} na faculdade ${curso.faculdade} no ano ${curso.ano}\n`
            );
          });
        }
      });
    },
  },
};
</script>
