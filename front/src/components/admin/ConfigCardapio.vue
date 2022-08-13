<template>
  <div class="wrapper">
    <h2>Cardápio</h2>
    <div class="section">
      <div class="container">
        <div class="md-layout md-gutter">
          <div class="md-layout-item">

            <div class="title">
              <h3>Novo Item de Cardápio</h3>
            </div>

            <div class="box">
              <md-field>
                <label for="category">Categoria: </label>
                <md-select id="category" v-model="newMenuItem.category" @md-selected="getAllProducts" required>
                  <md-option value="Expresso">Expresso</md-option>
                  <md-option value="Coado">Coado</md-option>
                  <md-option value="Chocolates">Chocolates</md-option>
                  <md-option value="Bolos">Bolos</md-option>
                  <md-option value="Salgados">Salgados</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="product">Produtos Cadastrados: </label>
                <md-select id="product" v-model="newMenuItem.productId" required>
                  <md-option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}
                  </md-option>
                </md-select>
              </md-field>
            </div>

            <div class="box">
              <md-button class="md-lg" @click="createMenuItem">
                Cadastrar
              </md-button>
            </div>
          </div>

          <div class="md-layout-item">

            <div class="title">
              <h3>Alterar Item do Cardápio</h3>
            </div>

            <div class="box">
              <md-field>
                <label for="category_a">Items do Cardápio Cadastrados: </label>
                <md-select id="category_a" @md-selected="selectMenuItem" required>
                  <md-option v-for="menu in menuItems" :key="menu.id" :value="menu.id">
                    {{ menu.id + " - " + menu.category }}
                  </md-option>
                </md-select>
              </md-field>
            </div>

            <div class="box">
              <md-field>
                <label for="product_a">Produtos Cadastrados: </label>
                <md-select id="product_a" v-model="updatedMenuItem.productId" required>
                  <md-option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}
                  </md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-button class="md-lg" @click="updateMenuItem">
                  Atualizar
                </md-button>
              </div>
              <div class="md-layout-item">
                <md-button class="md-lg" @click="deleteMenuItem">
                  Remover
                </md-button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showCreateDialog">
      <md-dialog-title>Item de Cardápio cadastrado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showCreateDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showUpdateDialog">
      <md-dialog-title>Cardápio atualizado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showUpdateDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showDeleteDialog">
      <md-dialog-title>Item do Cardápio removido com sucesso!</md-dialog-title>
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
      newMenuItem: {
        productId: 0
      },
      updatedMenuItem: {
        productId: 0
      },
      menuItems: [],
      products: [],
      showCreateDialog: false,
      showUpdateDialog: false,
      showDeleteDialog: false,
      showErrorDialog: false,
    }
  },
  created() {
    this.getMenuItems();
    this.getAllProducts();
  },
  methods: {
    selectMenuItem(selectedMenuId) {
      this.updatedMenuItem = this.menuItems.filter(p => p.id === selectedMenuId)[0];

      console.log('this.updatedMenuItem', this.updatedMenuItem)
    },
    getMenuItems() {
      axios
        .get(process.env.VUE_APP_SERVER_URL + "menu")
        .then((menuItems) => {
          this.menuItems = menuItems.data;
        }).catch((error) => {
          console.log(error);
        });
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
    createMenuItem() {
      axios
        .put(process.env.VUE_APP_SERVER_URL + "menu", this.newMenuItem)
        .then((menuItem) => {
          console.log('menuItem', menuItem);
          if (menuItem.data) {
            this.showCreateDialog = true;
            this.getMenuItems();
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showErrorDialog = true;
        });
    },
    updateMenuItem() {
      axios
        .patch(process.env.VUE_APP_SERVER_URL + "menu", this.updatedMenuItem)
        .then((menuItem) => {
          console.log('menuItem', menuItem);
          if (menuItem.data) {
            this.showUpdateDialog = true;
            this.getMenuItems();
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showErrorDialog = true;
        });
    },
    deleteMenuItem() {
      axios
        .delete(process.env.VUE_APP_SERVER_URL + "menu/" + this.updatedMenuItem.id)
        .then((menuItem) => {
          console.log('menuItem', menuItem);
          if (menuItem.data) {
            this.showDeleteDialog = true;
            this.getMenuItems();
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
