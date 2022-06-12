<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="center">
            <h1>Meu Pedido - Mesa 4</h1>
          </div>
          <div v-if="orderItems && orderItems.length > 0">
            <!--itens-->
            <div class="item" v-for="product in orderItems" :key="product.id">
              <div class="features ">
                <div class="md-layout">
                  <div class="md-layout-item md-size-10">
                    <img :src="require('../assets/img/' + product.imagelocation)" :alt="product.imagelocation">
                  </div>
                  <div class="md-layout-item md-size-60">
                    <h3 class="title">{{ product.name }}</h3>
                    <p class="description">{{ product.description }}</p>
                  </div>
                  <div class="md-layout-item md-size-10 center">
                    <h4 class="title">Quantidade</h4>
                    <span class="attribute">{{ product.quantity }}</span>
                  </div>
                  <div class="md-layout-item md-size-20 center">
                    <h4 class="title">Valor</h4>
                    <span class="attribute">R${{ product.totalCost }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!--spinner-->
            <div class="center" v-if="loading">
              <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
            </div>

            <!--fechar pedido-->
            <div class="center">
              <h3>Total: R${{ totalCost }}</h3>
              <md-button slot="buttons" href="javascript:void(0)" class="order" @click="sendOrder">
                Finalizar pedido
              </md-button>
            </div>
          </div>

          <!--aviso vazio-->
          <div v-if="!orderItems || orderItems.length === 0">
            <h3>Seu pedido está vazio, adicione itens <a href="#/cardapio">aqui</a></h3>
          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Pedido enviado! N° {{ orderId }}</md-dialog-title>
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
      loading: false,
      showDialog: false,
      orderId: 0,
      orderItems: [],
      totalCost: 0
    }
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.orderItems = this.$route.params.orderItems;
      this.totalCost = this.orderItems.reduce((acc, cur) => {
        return acc + cur.totalCost;
      }, 0);

    },
    sendOrder() {
      const order = {
        paymentMethod: "Dinheiro",
        clientId: 4,
        orderDate: new Date(),
        status: "Pendente",
        orderItems: this.orderItems,
        totalCost: this.totalCost
      }
      this.loading = true;
      axios
        .put(process.env.VUE_APP_SERVER_URL + "order", { order: order })
        .then((res) => {
          this.orderId = res.data;
          this.showDialog = true;
          this.loading = false;
        }).catch((error) => {
          console.log(error);
        });
    },
  }
};
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
  background-color: rgb(30, 129, 0) !important;
}

.order:hover {
  background-color: rgba(30, 129, 0, 0.8) !important;
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
