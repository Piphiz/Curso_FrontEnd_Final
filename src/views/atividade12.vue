<template>
  <div id="covid" class="col-8">
    <v-card elevation="2" outlined>
      <v-img
        class="mt-8 mb-3"
        src="@/assets/logo-unime-p.png"
        max-height="100px"
        contain
      ></v-img>

      <v-container fluid>
        <p class="red--text"><strong>Buscar pelo Estado (UF)</strong></p>
        <v-row class="mt-n6" align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="selectedState"
              :items="cities"
              :item-text="text"
              item-value="uf"
              label="-- SELECIONE UM ESTADO --"
              dense
              outlined
              filled
              @change="getDataByUF()"
            ></v-select>
          </v-col>
          <v-col class="d-flex mt-n6" cols="12" sm="6">
            <div
              v-if="!notSelected"
              class="
                pa-2
                red
                darken-1
                text-no-wrap
                rounded-lg
                white--text
                col-md-12
                text-center
              "
            >
              <strong
                >Atualizado em:
                {{ selectedStateData.datetime | formatDate }}</strong
              >
            </div>
          </v-col>
        </v-row>
        <v-row v-if="!notSelected" class="mt-n6" align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <div v-if="!notSelected" class="col-md-12 red--text">
              <strong>Número de casos (Confirmados)</strong>
              <v-text-field
                :value="selectedStateData.cases"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <div v-if="!notSelected" class="col-md-12 red--text">
              <strong>Número de obitos</strong>
              <v-text-field
                :value="selectedStateData.deaths"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="!notSelected" class="mt-n6" align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <div v-if="!notSelected" class="col-md-12 red--text">
              <strong>Número de casos (Suspeitos)</strong>
              <v-text-field
                :value="selectedStateData.suspects"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
              ></v-text-field>
            </div>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <div v-if="!notSelected" class="col-md-12 red--text">
              <strong>Casos rejeitados</strong>
              <v-text-field
                :value="selectedStateData.refuses"
                filled
                class="rounded-lg"
                disabled
                dense
                outlined
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-img
          v-if="notSelected"
          class="mt-8 mb-8 d-flex"
          src="@/assets/base.png"
          max-height="200px"
          contain
        ></v-img>
        <v-img
          v-if="error"
          class="mt-8 mb-8 d-flex"
          src="@/assets/error.png"
          max-height="200px"
          contain
        ></v-img>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      cities: [],
      selectedState: "",
      selectedStateData: [],
      error: false,
      notSelected: true,
    };
  },
  mounted() {
    this.getCitiesUF();
  },
  filters: {
    formatDate: function (value) {
      if (!value) return "";
      return moment(value).format("D/MM/YYYY [as] HH[h]mm");
    },
  },
  methods: {
    getCitiesUF() {
      const endpoint = `https://covid19-brazil-api.vercel.app/api/report/v1`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          json.data.forEach((json, index) => {
            this.cities[index] = {
              name: json.state,
              uf: json.uf,
            };
          });
          this.cities.sort(function case_insensitive_comp(strA, strB) {
            return strA.name
              .toLowerCase()
              .localeCompare(strB.name.toLowerCase());
          });
        });
    },
    getDataByUF() {
      const endpoint = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${this.selectedState}`;

      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          if (json.error != "state not found") {
            this.error = false;
            this.selectedStateData = json;
            this.notSelected = false;
          } else {
            this.notSelected = false;
            this.error = true;
          }
        })
        .catch(function () {
          this.notSelected = false;
          this.error = true;
        });
    },
    text: (item) => item.name + " — " + item.uf,
  },
};
</script>
