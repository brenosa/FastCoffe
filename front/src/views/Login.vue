<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Área restrita</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>CPF</label>
                <md-input v-model="cpf"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Senha</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-simple md-success md-lg" @click="login">
                Login
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Erro, credenciais incorretas!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import axios from "axios";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      cpf: null,
      password: null,
      showDialog: false
    };
  },
  props: {
    header: {
      type: String,
    }
  },
  methods: {
    login() {
      axios
        .post(process.env.VUE_APP_SERVER_URL + "user/login", { cpf: this.cpf, password: this.password })
        .then((res) => {
          console.log('res', res)
          if (res.data?.userRole === 'employee') {
            this.$router.push({ name: 'administracao', params: { user: res.data } })
          } else {
            this.showDialog = true;
          }
        }).catch((error) => {
          console.log(error);
          this.showDialog = true;
        });
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css">
</style>
