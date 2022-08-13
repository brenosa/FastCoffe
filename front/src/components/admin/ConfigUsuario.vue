<template>
  <div class="wrapper">
    <h2>Cadastro Novo Usuário</h2>
    <div class="section">
      <div class="container">
        <div class="center">
          <div class="box">
            <md-field>
              <label for="nome">Nome: </label>
              <md-input id="nome" type="text" v-model="newUser.name" required> </md-input>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="gender">Sexo: </label>
              <md-select id="gender" v-model="newUser.gender" required>
                <md-option value="M">Masculino</md-option>
                <md-option value="F">Feminino</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="email">Email: </label>
              <md-input id="email" type="text" v-model="newUser.email" required> </md-input>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="phone">Telefone: </label>
              <md-input id="phone" type="text" v-model="newUser.phone" required> </md-input>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="cpf">CPF: </label>
              <md-input id="cpf" type="text" v-model="newUser.cpf" required> </md-input>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="password">Senha: </label>
              <md-input id="password" type="password" v-model="newUser.password" required> </md-input>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="position">Posição: </label>
              <md-select id="position" v-model="newUser.position" required>
                <md-option value="manager">Gerente</md-option>
                <md-option value="waiter">Garçom</md-option>
                <md-option value="hatter">Chapeiro</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="box">
            <md-field>
              <label for="userRole">Perfil: </label>
              <md-select id="userRole" v-model="newUser.userRole" required>
                <md-option value="employee">Funcionário</md-option>
                <md-option value="client">Cliente</md-option>
              </md-select>
            </md-field>
          </div>

          <div class="box">
            <md-button class="md-lg" @click="createUser">
              Cadastrar Usuário
            </md-button>
          </div>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Usuário cadastrado com sucesso!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showErrorDialog">
      <md-dialog-title>Falha ao cadastrar usuário! Usuário já existe.</md-dialog-title>
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
      newUser: {},
      showDialog: false,
      showErrorDialog: false
    }
  },
  methods: {
    createUser() {
      axios
        .put(process.env.VUE_APP_SERVER_URL + "user", this.newUser)
        .then((user) => {
          if (user.data) {
            this.showDialog = true;
          } else {
            this.showErrorDialog = true;
          }
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  width: 500px;
  justify-content: flex-start;
}

.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
