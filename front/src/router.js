import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Administracao from "./views/Administracao.vue";
import Cardapio from "./views/Cardapio.vue";
import Carrinho from "./views/Carrinho.vue";
import Novidades from "./views/Novidades.vue";
import Promocao from "./views/Promocao.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: { default: Home, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/administracao",
      name: "administracao",
      components: { default: Administracao, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/cardapio",
      name: "cardapio",
      components: { default: Cardapio, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/carrinho",
      name: "carrinho",
      components: { default: Carrinho, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/novidades",
      name: "novidades",
      components: { default: Novidades, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/promocao",
      name: "promocao",
      components: { default: Promocao, header: MainNavbar, footer: MainFooter },
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
