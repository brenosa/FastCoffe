<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          
          <div v-if="isEmployee && isManager">
            <md-tabs>
              <md-tab id="tab-home" md-label="Início" exact>
                <h2>Bem vindo {{ user.name }}!</h2>
              </md-tab>

              <md-tab id="tab-pages" md-label="Usuário">
                <ConfigUsuario />
              </md-tab>

              <md-tab id="tab-posts" md-label="Produto">
                <ConfigProduto />
              </md-tab>

              <md-tab id="tab-favorites" md-label="Cardápio">
                <ConfigCardapio />
              </md-tab>
            </md-tabs>
          </div>

          <div v-if="isEmployee && !isManager">
            <FilaPedidos />
          </div>

          <div v-if="!isEmployee">
            Área restrita para funcionários!
          </div>
        </div>
      </div>
      <div>
        <md-button class="logout pull-right" @click="logout">
          Logout
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>

import ConfigUsuario from '../components/admin/ConfigUsuario.vue'
import ConfigProduto from '../components/admin/ConfigProduto.vue'
import ConfigCardapio from '../components/admin/ConfigCardapio.vue'
import FilaPedidos from '../components/FilaPedidos.vue'

export default {
  components: {
    ConfigUsuario,
    ConfigProduto,
    ConfigCardapio,
    FilaPedidos
  },
  data() {
    return {
      isEmployee: false,
      isManager: false,
      user: {}
    }
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.user = JSON.parse(sessionStorage.user);
      this.isEmployee = this.user?.userRole === 'employee';
      this.isManager = this.user?.position === 'manager';
    },
    logout() {
      sessionStorage.removeItem('user');
      this.$router.push({ name: 'login' })
    }
  }
};
</script>

<style lang="scss" scoped>
.logout {
  background-color: red !important;
}
</style>
