<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="item" v-for="product in menu" :key="product.id">
            <div class="features ">
              <div class="md-layout">
                <div class="md-layout-item md-size-10">
                  <img :src="product.imageLocation" :alt="product.imageLocation">
                </div>
                <div class="md-layout-item md-size-60">
                  <h3>{{ product.name }}</h3>
                  <span>{{ product.description }}</span>
                </div>
                <div class="md-layout-item md-size-10 center input">
                  <input class="vertical-center" :id="product.id" type="number" v-model="product.quantity"
                    placeholder="0" min="0" />
                </div>
                <div class="md-layout-item md-size-20 center">
                  <h4><strong>Valor unitário</strong></h4>
                  <span class="cost">{{ product.cost }}</span>
                  <h4><strong>Total</strong></h4>
                  <span class="cost">{{ (product.cost * (product.quantity) || "-") }}</span>
                </div>
              </div>
            </div>
          </div>
          <md-button slot="buttons" href="javascript:void(0)" class="botao-finalizar" @click="getOrder">
            Finalizar pedido
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
      menu: [],
      order: []
    }
  },
  created() {
    this.getMenu();
  },
  methods: {
    getMenu() {
      console.log('process.env.VUE_APP_SERVER_URL', process.env.VUE_APP_SERVER_URL)
      axios
        .get(process.env.VUE_APP_SERVER_URL + "menu")
        .then((res) => {
          console.log('res', res.data)
          this.menu = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOrder() {
      this.menu.forEach(item => {
        if (item.quantity) {
          this.order.push({
            ...item,
            totalCost: parseInt(item.quantity) * parseFloat(item.cost)
          })
        }
      });
      this.$router.push({ name: 'carrinho',  params: this.order })
    }
  }
}
</script>

<style lang="scss" scoped>
h3,
span.cost {
  color: white;
  font-weight: bold
}

.item {
  background-color: #7D6D6D;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
}

.botao-finalizar {
  display: flex;
  justify-content: center !important;
  background-color: rgb(129, 0, 0) !important;
}

.botao-finalizar:hover {
  background-color: rgba(129, 0, 0, 0.8) !important;
}

input[type='number'] {
  width: 60px;
}

.center {
  text-align: center;
}

.vertical-center {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

div.input {
  height: 150px;
  line-height: 150px;
  text-align: center;
}
</style>
