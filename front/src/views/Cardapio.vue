<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="item" v-for="produto in cardapio" :key="produto.id">
            <div class="features ">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-10 md-small-size-100">
                  <img :src="produto.caminhoImagem" :alt="produto.caminhoImagem">
                </div>
                <div class="md-layout-item md-medium-size-80 md-small-size-100">
                  <h3>{{ produto.nome }}</h3>
                  <span>{{ produto.descricao }}</span>
                </div>
                <div class="md-layout-item md-medium-size-10 md-small-size-100">
                  qtd
                </div>
              </div>
            </div>
          </div>
          <md-button slot="buttons" href="javascript:void(0)" class="botao-finalizar">
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
      cardapio: [{
        id: 1,
        nome: "Espresso",
        descricao: "Extração intensa dos atributos sensoriais do café. A moagem fina unida a pressão da água traz um bebida intensa...  Leia Mais ->",
        caminhoImagem: "img",
        categoria: "espresso"
      }, {
        id: 2,
        nome: "Panna",
        descricao: "Panna quer dizer 'creme' em italiano. Uma deliciosa cobertura de chantilly adicionada ao espresso...  Leia Mais ->",
        caminhoImagem: "img",
        categoria: "espresso"
      }]
    }
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      console.log(process.env.VUE_APP_SERVER_URL)
      axios
        .get(process.env.VUE_APP_SERVER_URL + "product")
        .then((res) => {
          this.cardapio = res.data.cardapio;      
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
h3,
span {
  color: white
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
</style>
