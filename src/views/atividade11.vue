<template>
  <div class="row">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col-11 mt-1">Sugestões para você ︎&#128521;</div>
                <div class="col-1 d-grid gap-2 justify-content-md-end">
                  <button
                    @click="clearList"
                    type="button"
                    class="btn"
                    style="outline: none; box-shadow: none"
                  >
                    <span class="text-danger">Limpar</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">
                Escolha seus assuntos favoritos e receba conteúdos selecionados
                para você!
              </p>
              <div class="row">
                <div
                  v-for="(notice, index) of typesOfNotices"
                  :key="notice.name"
                  class="col-md-auto ms-0 me-0"
                  style="
                    -moz-user-select: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                    -o-user-select: none;
                    user-select: none;
                  "
                >
                  <div
                    @click="selectItem(index)"
                    class="card border-light mb-3"
                    :class="
                      notice.status ? 'bg-danger text-light' : 'text-danger'
                    "
                  >
                    <div class="card-body">
                      <a>{{ notice.name }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button
                  class="btn btn-danger btn-lg white--text"
                  type="button"
                  :disabled="isDisabled"
                >
                  Seguir Assuntos
                </button>
              </div>
            </div>
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
      quantity: 0,
      typesOfNotices: [
        {
          name: "cpi da covid",
          status: false,
        },
        {
          name: "vacina",
          status: false,
        },
        {
          name: "#fato ou #fake",
          status: false,
        },
        {
          name: "auxilio emergencial",
          status: false,
        },
        {
          name: "economia",
          status: false,
        },
        {
          name: "musica",
          status: false,
        },
        {
          name: "tecnologia",
          status: false,
        },
        {
          name: "videos",
          status: false,
        },
        {
          name: "podcast",
          status: false,
        },
        {
          name: "politica",
          status: false,
        },
        {
          name: "mundo",
          status: false,
        },
        {
          name: "cinema",
          status: false,
        },
        {
          name: "ciencia",
          status: false,
        },
        {
          name: "educacao",
          status: false,
        },
        {
          name: "imposto de renda",
          status: false,
        },
      ],
    };
  },
  methods: {
    clearList() {
      this.typesOfNotices.forEach((notice) => {
        notice.status = false;
      });
      this.quantity = 0;
    },
    selectItem(index) {
      if (this.typesOfNotices[index].status === true) {
        this.typesOfNotices[index].status = false;
        this.quantity--;
      } else {
        this.typesOfNotices[index].status = true;
        this.quantity++;
      }
    },
  },
  computed: {
    isDisabled() {
      return !this.quantity > 0;
    },
  },
};
</script>
