<template>
  <div class="container">
    <div class="col-md-12 mt-3">
      <div v-if="checker" class="alert alert-danger" role="alert">
        Insert a valid value
      </div>
    </div>
    <div class="row justify-content-center mb-3">
      <div class="mb-3">
        <label for="nome" class="form-label">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="nome"
          placeholder="Digite o nome de usuario"
        />
      </div>
      <button class="btn btn-danger col-3" @click="carregarPerfil">
        Load profile
      </button>
    </div>
    <div class="row justify-content-center" v-if="cardActive">
      <div class="card col-md-10">
        <div class="row g-0">
          <div class="col-md-3">
            <v-avatar size="200">
              <v-img :src="profilePicture"></v-img>
            </v-avatar>
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">User Profile</h5>
              <p class="card-text">Name: {{ userGithub }}</p>
              <p class="card-text">
                Location: {{ location != null ? location : "N/A" }}
              </p>
              <p class="card-text">
                URL: <a :href="urlHtml">{{ urlHtml }}</a>
              </p>
              <p class="card-text">Public Repositories:</p>
              <ul>
                <li
                  v-for="repositorie of repositoriesGithub"
                  :key="repositorie.name"
                  class="list-group-item"
                >
                  <p>Name: {{ repositorie.name }}</p>
                  <p>
                    Description:
                    {{
                      repositorie.description != null
                        ? repositorie.description
                        : "N/A"
                    }}
                  </p>
                  <p>
                    URL:
                    <a :href="repositorie.urlHtml">{{ repositorie.urlHtml }}</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <button class="btn btn-danger col-3" @click="limparPerfil">
          Clear profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userGithub: "",
      cardActive: false,
      checker: false,
      location: "",
      urlHtml: "",
      profilePicture: "",
      repositoriesGithub: [],
    };
  },
  methods: {
    carregarPerfil() {
      const endpoint = `https://api.github.com/users/${this.username}`;

      if (this.username != "") {
        fetch(endpoint)
          .then((response) => response.json())
          .then((json) => {
            if (json.message != "Not Found") {
              this.repositoriesGithub = [];
              this.cardActive = false;
              this.userGithub = json.login;
              this.location = json.location;
              this.urlHtml = json.html_url;
              this.profilePicture = json.avatar_url;
              this.carregarProjetos(json.repos_url);
            } else {
              this.checker = true;
              this.cardActive = false;
            }
          });
      } else {
        this.checker = true;
      }
    },
    limparPerfil() {
      this.cardActive = false;
    },
    carregarProjetos(url) {
      const endpoint = url;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          json.forEach((projeto, index) => {
            this.repositoriesGithub[index] = {
              name: projeto.name,
              urlHtml: projeto.html_url,
              description: projeto.description,
            };
          });
          this.cardActive = true;
          this.checker = false;
        });
    },
  },
};
</script>
