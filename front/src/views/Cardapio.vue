<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="center">
            <h1>Cardápio</h1>
          </div>
          <div class="center" v-if="loading">
            <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
          </div>
          <div class="item" v-for="product in menu" :key="product.id">
            <div class="features ">
              <div class="md-layout">
                <div class="md-layout-item md-size-10">
                  <img :src="require('../assets/img/' + product.imagelocation)" :alt="product.imagelocation">
                </div>
                <div class="md-layout-item md-size-60">
                  <h3 class="title">{{ product.name }}</h3>
                  <p class="description">{{ product.description }}</p>
                  <p class="attribute">R${{ product.cost }} cada</p>
                </div>
                <div class="md-layout-item md-size-10 center input">
                  <h4 class="title">Quantidade</h4>
                  <input :id="product.id" type="number" v-model="product.quantity" placeholder="0" min="0" />
                </div>
                <div class="md-layout-item md-size-20 center">
                  <h4 class="title">Total</h4>
                  <span class="attribute">R${{ (product.cost * (product.quantity) || "-") }}</span>
                </div>
              </div>
            </div>
          </div>
          <md-button slot="buttons" href="javascript:void(0)" class="order" @click="getOrder">
            Revisar pedido
          </md-button>
        </div>
      </div>
    </div>   
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      menu: [],
      orderItems: []
    }
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      this.loading = true;
      console.log('process.env.VUE_APP_SERVER_URL', process.env.VUE_APP_SERVER_URL)
      axios
        .get(process.env.VUE_APP_SERVER_URL + "menu")
        .then((res) => {
          console.log('res', res.data)
          this.menu = res.data;
          this.loading = false;
        }).catch((error) => {
          console.log(error);
        });
    },
    getOrder() {
      this.menu.forEach(item => {
        if (item.quantity) {
          this.orderItems.push({
            ...item,
            productId: item.id,
            totalCost: parseInt(item.quantity) * parseFloat(item.cost)
          })
        }
      });
      this.$router.push({ name: 'pedido', params: { orderItems: this.orderItems } })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: rgb(218, 218, 218);
  font-weight: bold
}

.item {
  background-color: #7D6D6D;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
}

.order {
  display: flex;
  justify-content: center !important;
  background-color: rgb(129, 0, 0) !important;
}

.order:hover {
  background-color: rgba(129, 0, 0, 0.8) !important;
}

input[type='number'] {
  width: 60px;
}

.center {
  text-align: center;
}

.attribute {
  font-size: large;
  font-weight: bold;
}

.description {
  font-size: medium;
  font-weight: bold;
}
</style>
