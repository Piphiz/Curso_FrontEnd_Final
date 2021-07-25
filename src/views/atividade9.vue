<template>
  <div class="row mt-5">
    <div class="row justify-content-center mb-3">
      <button class="btn btn-danger col-3" @click="carregarTextos">
        Mostrar Textos
      </button>
    </div>
    <div v-if="enable" class="row justify-content-center">
      <div class="list-group col-8" id="groupTexts">
        <a
          v-for="(text, index) of texts"
          :key="text.title"
          @click="abrirComentarios(index)"
          class="list-group-item list-group-item-action black--text"
          :class="{
            'grey lighten-3': index % 2,
            'grey lighten-5': !(index % 2),
          }"
        >
          <div class="d-flex justify-content-between">
            <h5 class="mb-1">{{ text.title }}</h5>
          </div>
          <p class="mb-1">{{ text.body }}</p>
          <div v-if="text.active">
            <div
              v-for="(comment, index) of text.comments"
              :key="comment.name"
              class="list-group"
            >
              <a
                class="list-group-item list-group-item-action black--text"
                :class="{ 'grey lighten-1': index % 2, grey: !(index % 2) }"
              >
                <div class="d-flex justify-content-between">
                  <h5 class="mb-1">Comentario de {{ comment.name }}</h5>
                </div>
                <p class="mb-1">{{ comment.body }}</p>
                <p class="mb-1">Email: {{ comment.email }}</p>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [],
      enable: false,
    };
  },
  methods: {
    carregarTextos() {
      const endpoint = "https://jsonplaceholder.typicode.com/posts";

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          this.enable = false;
          json.forEach((text, index) => {
            this.texts[index] = {
              id: text.id,
              title: text.title,
              body: text.body,
              active: false,
              comments: [],
            };
            this.carregarComentarios(text.id, index);
          });
          this.enable = true;
        });
    },
    carregarComentarios(id, value) {
      const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          json.map((comentario, index) => {
            this.texts[value].comments[index] = {
              name: comentario.name,
              body: comentario.body,
              email: comentario.email,
            };
          });
        });
    },
    abrirComentarios(id) {
      this.enable = false;
      if (this.texts[id].active != true) {
        this.texts[id].active = true;
      } else {
        this.texts[id].active = false;
      }
      this.enable = true;
    },
  },
};
</script>
