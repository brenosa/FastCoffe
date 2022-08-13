<template>
  <div class="wrapper">
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="center">
            <h1>Pedidos em aberto</h1>
          </div>
          <!--pedidos-->
          <div class="order" v-for="order in pendingOrders" :key="order.id">
            <div class="md-layout">
              <div class="md-layout-item md-size-33">
                <h3 class="title center">Pedido</h3>
                <p class="description center">{{ order.id }}</p>
              </div>
              <div class="md-layout-item md-size-33">
                <h3 class="title center">Mesa</h3>
                <p class="description center">{{ order.clientId }}</p>
              </div>
              <div class="md-layout-item md-size-33">
                <h3 class="title center">Data</h3>
                <p class="description center">{{ formatDate(order.orderDate) }}</p>
              </div>
    
              <!--itens-->
              <div class="md-layout-item md-size-50">
                <div class="item" v-for="item in order.orderItems" :key="item.id">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-30">
                      <img :src="require('../assets/img/' + item.product.imageLocation)" :alt="order.imagelocation">
                    </div>
                    <div class="md-layout-item md-size-70">
                      <br/>
                      <p class="description-item center">{{ item.quantity }} {{ item.product.name }}(s)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--spinner-->
          <div class="center" v-if="loading">
            <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
          </div>

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
      pendingOrders: [],
      loading: false,
    }
  },
  created() {
    this.getPendingOrders();
  },
  methods: {
    getPendingOrders() {
      this.loading = true;
      axios
        .get(process.env.VUE_APP_SERVER_URL + "order")
        .then((res) => {
          console.log('res', res.data)
          this.pendingOrders = res.data;
          this.loading = false;
        }).catch((error) => {
          console.log(error);
        });
    },
    formatDate(date) {
      if (date) {
        const formatOptions = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const d = new Date(date);
        return d.toLocaleDateString("pt-BR", formatOptions)
      }
      return date;
    },
  },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.order {
  background-color: #7D6D6D;
  padding: 20px;
  border-radius: 5px;
  margin: 15px;
}

.item {
  background-color: #5e5656;
  padding: 40px;
  border-radius: 5px;
  margin: 15px;
}

.description {
  font-size: medium;
  font-weight: bold;
}

.description-item {
  font-size: medium;
  font-weight: bold;
  color: rgb(218, 218, 218);
}

.title {
  color: rgb(218, 218, 218);
  font-weight: bold
}
</style>
