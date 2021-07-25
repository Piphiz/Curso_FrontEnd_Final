<template>
  <div class="row mt-5">
    <div class="row justify-content-center mb-3">
      <button class="btn btn-danger col-3" @click="addName">
        Adicionar nome
      </button>
    </div>
    <v-data-table
      :headers="headers"
      :items="names"
      :items-per-page="5"
      item-key="id"
      class="elevation-1 pa-0"
      :footer-props="{ 'items-per-page-text': 'Items por pagina' }"
    >
      <template v-slot:item="row">
        <tr>
          <td class="black--text pr-0">
            {{ row.item.id }}
          </td>
          <td class="black--text pr-0">
            {{ row.item.name }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  data() {
    return {
      headers: [
        {
          text: "Id",
          aling: "start",
          value: "id",
          class: "red--text text-table pr-0",
          width: "8%",
        },
        {
          text: "Nome",
          value: "name",
          class: "red--text text-table pr-0",
        },
      ],
      names: [
        { id: 1, name: "Cleber" },
        { id: 2, name: "Eduardo" },
        { id: 3, name: "Lucas" },
        { id: 4, name: "Paulo" },
        { id: 5, name: "Leonardo" },
        { id: 6, name: "Vinicius" },
        { id: 7, name: "Guten" },
        { id: 8, name: "Natan" },
        { id: 9, name: "Thiago" },
      ],
      position: "",
      name: "",
    };
  },
  methods: {
    addName() {
      this.position = parseInt(
        prompt(`Digite em qual posicao o nome vai ser inserido`)
      );
      while (isNaN(this.position)) {
        this.position = parseInt(prompt(`Digite um valor valido`));
      }
      this.name = prompt(`Digite o nome que vai ser inserido`);
      while (this.name == "") {
        this.name = prompt(
          `Digite um nome valido, no caso nao deixe em branco`
        );
      }
      Vue.set(this.names, this.position - 1, {
        id: this.position,
        name: this.name,
      })
    },
  },
};
</script>
