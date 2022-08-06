<template>
  <div class="wrapper">
    <h2>Cadastro Cardápio</h2>
    <div class="section">
      <div class="container">
        <div>

          <div class="input">
            <label for="nome">Nome: </label>
            <input id="nome" type="text" v-model="newUser.name" required />
          </div>

          <div class="input">
            <label for="gender">Sexo: </label>
            <select id="gender" v-model="newUser.gender" required>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div class="input">
            <label for="email">Email: </label>
            <input id="email" type="text" v-model="newUser.email" required />
          </div>

          <div class="input">
            <label for="phone">Telefone: </label>
            <input id="phone" type="text" v-model="newUser.phone" required />
          </div>

          <div class="input">
            <label for="cpf">CPF: </label>
            <input id="cpf" type="text" v-model="newUser.cpf" required />
          </div>

          <div class="input">
            <label for="password">Senha: </label>
            <input id="password" type="password" v-model="newUser.password" required />
          </div>

          <div class="input">
            <label for="position">Posição: </label>
            <select id="position" v-model="newUser.position" required>
              <option value="manager">Gerente</option>
              <option value="waiter">Garçom</option>
              <option value="hatter">Chapeiro</option>
            </select>
          </div>

          <div class="input">
            <label for="userRole">Perfil: </label>
            <select id="userRole" v-model="newUser.userRole" required>
              <option value="employee">Funcionário</option>
              <option value="client">Cliente</option>
            </select>
          </div>

          <div class="input">
            <md-button class="md-lg" @click="createUser">
              Cadastrar
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newUser: {},
      showDialog: false
    }
  },
  methods: {
    createUser() {
      axios
        .put(process.env.VUE_APP_SERVER_URL + "user", this.newUser)
        .then((user) => {
          console.log('user', user);
          this.showDialog = true;

        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  padding: 10px;
}
</style>
