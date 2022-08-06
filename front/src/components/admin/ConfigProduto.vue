<template>
  <div class="wrapper">
    <h2>Produtos</h2>
    <div class="section">
      <div class="container">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">

            <div class="title">
              <h3>Novo Produto</h3>
            </div>

            <div class="box">
              <md-field>
                <label for="nome">Nome: </label>
                <md-input id="nome" type="text" v-model="newProduct.name" required> </md-input>
              </md-field>

            </div>

            <div class="box">
              <md-field>
                <label for="description">Descrição: </label>
                <md-input id="description" type="text" v-model="newProduct.description" required>
                </md-input>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="imageLocation">Imagem: </label>
                <md-input id="imageLocation" type="text" v-model="newProduct.imageLocation" required> </md-input>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="category">Categoria: </label>
                <md-select id="category" v-model="newProduct.category" required>
                  <md-option value="manager">Gerente</md-option>
                  <md-option value="waiter">Garçom</md-option>
                  <md-option value="hatter">Chapeiro</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="box">
              <md-button class="md-lg" @click="createProduct">
                Cadastrar
              </md-button>
            </div>
          </div>

          <div class="md-layout-item">

            <div class="title">
              <h3>Alterar Produto</h3>
            </div>


            <div class="box">
              <md-field>
                <label for="nome_a">Nome: </label>
                <md-input id="nome_a" type="text" v-model="updatedProduct.name" required> </md-input>
              </md-field>

            </div>

            <div class="box">
              <md-field>
                <label for="description_a">Descrição: </label>
                <md-input id="description_a" type="text" v-model="updatedProduct.description" required>
                </md-input>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="imageLocation_a">Imagem: </label>
                <md-input id="imageLocation_a" type="text" v-model="updatedProduct.imageLocation" required> </md-input>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="category_a">Categoria: </label>
                <md-select id="category_a" v-model="updatedProduct.category" required>
                  <md-option value="manager">Gerente</md-option>
                  <md-option value="waiter">Garçom</md-option>
                  <md-option value="hatter">Chapeiro</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-button class="md-lg" @click="updateProduct">
                  Atualizar
                </md-button>
              </div>
              <div class="md-layout-item">
                <md-button class="md-lg" @click="deleteProduct">
                  Remover
                </md-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Produto cadastrado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newProduct: {},
      updatedProduct: {},
      products: [],
      showDialog: false
    }
  },
  methods: {
    getAllProducts() {
      axios
        .get(process.env.VUE_APP_SERVER_URL + "product", this.newProduct)
        .then((products) => {
          this.products = products;
        }).catch((error) => {
          console.log(error);
        });
    },
    createProduct() {
      axios
        .put(process.env.VUE_APP_SERVER_URL + "product", this.newProduct)
        .then((product) => {
          console.log('product', product);
          this.showDialog = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    updateProduct() {
      axios
        .patch(process.env.VUE_APP_SERVER_URL + "product", this.newProduct)
        .then((product) => {
          console.log('product', product);
          this.showDialog = true;
        }).catch((error) => {
          console.log(error);
        });
    },
    deleteProduct() {
      axios
        .delete(process.env.VUE_APP_SERVER_URL + "product", this.newProduct)
        .then((product) => {
          console.log('product', product);
          this.showDialog = true;
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  width: 500px;
}

.title {
  width: 300px;
}
</style>
