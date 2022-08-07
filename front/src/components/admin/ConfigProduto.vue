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
                <label for="name">Nome: </label>
                <md-input id="name" type="text" v-model="newProduct.name" required> </md-input>
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
                <label for="product_a">Produtos Cadastrados: </label>
                <md-select id="product_a" @md-selected="selectProduct" required>
                  <md-option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}
                  </md-option>
                </md-select>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="name_a">Nome: </label>
                <md-input id="name_a" type="text" v-model="updatedProduct.name" required> </md-input>
              </md-field>

            </div>

            <div class="box">
              <md-field>
                <label for="description_a">Descrição: </label>
                <md-input id="description_a" type="text" v-model="updatedProduct.description" required>
                </md-input>
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
    <md-dialog :md-active.sync="showCreateDialog">
      <md-dialog-title>Produto cadastrado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showCreateDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showUpdateDialog">
      <md-dialog-title>Produto atualizado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showUpdateDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showDeleteDialog">
      <md-dialog-title>Produto removido com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDeleteDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showErrorDialog">
      <md-dialog-title>Falha!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showErrorDialog = false">OK</md-button>
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
      showCreateDialog: false,
      showUpdateDialog: false,
      showDeleteDialog: false,
      showErrorDialog: false,
    }
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    selectProduct(selectedProductId) {
      this.updatedProduct = this.products.filter(p => p.id === selectedProductId)[0];
    },
    getAllProducts() {
      axios
        .get(process.env.VUE_APP_SERVER_URL + "product")
        .then((products) => {
          this.products = products.data;
        }).catch((error) => {
          console.log(error);
        });
    },
    createProduct() {
      axios
        .put(process.env.VUE_APP_SERVER_URL + "product", this.newProduct)
        .then((product) => {
          console.log('product', product);
          if (product.data) {
            this.showCreateDialog = true;
             this.getAllProducts();
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showErrorDialog = true;
        });
    },
    updateProduct() {
      axios
        .patch(process.env.VUE_APP_SERVER_URL + "product", this.updatedProduct)
        .then((product) => {
          console.log('product', product);
          if (product.data) {
            this.showUpdateDialog = true;
             this.getAllProducts();
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showErrorDialog = true;
        });
    },
    deleteProduct() {
      axios
        .delete(process.env.VUE_APP_SERVER_URL + "product/" + this.updatedProduct.id)
        .then((product) => {
          console.log('product', product);
          if (product.data) {
            this.showDeleteDialog = true;
             this.getAllProducts();
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showErrorDialog = true;
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
