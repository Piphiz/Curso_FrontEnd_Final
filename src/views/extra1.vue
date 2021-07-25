<template>
  <div id="bk">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="row">
            <div
              v-for="product of products"
              :key="product.name"
              class="col-md-4"
            >
              <div class="card mb-3">
                <img :src="product.image" class="card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">{{ product.name }}</h5>
                  <p class="card-text">{{ product.description }}</p>
                  <h4>{{ product.price | formatMoney }}</h4>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      v-model="product.amount"
                      disabled
                    />
                    <button
                      @click="removeProduct(product)"
                      class="btn btn-danger"
                      type="button"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </button>
                    <button
                      @click="addProduct(product)"
                      class="btn btn-primary"
                      type="button"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="card">
            <div class="card-header">
              <h4>Produtos Selecionados</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Preco</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product of selectedProducts" :key="product.name">
                    <td>{{ product.name }}</td>
                    <td>{{ product.amount }}</td>
                    <td>{{ product.price | formatMoney }}</td>
                    <td>
                      {{ (product.amount * product.price) | formatMoney }}
                    </td>
                  </tr>
                </tbody>
              </table>
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
      products: [
        {
          id: 1,
          name: "Combo Super Burguer I",
          description:
            "Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada",
          price: 9.9,
          image: require("@/assets/images/img1.png"),
          amount: 0,
        },
        {
          id: 2,
          name: "Combo Super Burguer II",
          description:
            "Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada",
          price: 19.9,
          image: require("@/assets/images/img2.png"),
          amount: 0,
        },
        {
          id: 3,
          name: "Combo Super Burguer III",
          description:
            "Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada",
          price: 29.9,
          image: require("@/assets/images/img3.png"),
          amount: 0,
        },
        {
          id: 4,
          name: "Combo Super Burguer IV",
          description:
            "Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada",
          price: 39.9,
          image: require("@/assets/images/img4.png"),
          amount: 0,
        },
        {
          id: 5,
          name: "Combo Super Burguer V",
          description:
            "Hambúrguer de Carne Bovina, Queijo Cheddar, Onion Rings e Salada",
          price: 49.9,
          image: require("@/assets/images/img5.png"),
          amount: 0,
        },
      ],
      selectedProducts: [],
    };
  },
  filters: {
    formatMoney(value) {
      return "R$ " + value.toFixed(2).replace(".", ",");
    },
  },
  methods: {
    addProduct(product) {
      product.amount++;
      this.addProductToInvoice(product);
    },
    removeProduct(product) {
      if (product.amount > 0) {
        product.amount--;
      }
      this.removeProductFromInvoice(product);
    },
    addProductToInvoice(product) {
      if (!this.selectedProducts.includes(product)) {
        this.selectedProducts.push(product);
      }
    },
    removeProductFromInvoice(product) {
      if (this.selectedProducts.includes(product) && product.amount === 0) {
        this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1);
      }
    },
  },
};
</script>
