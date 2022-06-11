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
          <div class="item" v-if="order && order.length > 0" v-for="product in order" :key="product.id">
            <div class="features ">
              <div class="md-layout">
                <div class="md-layout-item md-size-10">
                  <img :src="product.imageLocation" :alt="product.imageLocation">
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
          <div v-if="!order || order.length === 0">
            <h3>Seu pedido está vazio, adicione itens <a href="#/cardapio">aqui</a></h3>
          </div>
          <md-button slot="buttons" href="javascript:void(0)" class="order" @click="getOrder">
            Finalizar pedido
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: []
    }
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.order = this.$route.params.order;
      console.log('this.order', this.$route.params.order)
    }
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
