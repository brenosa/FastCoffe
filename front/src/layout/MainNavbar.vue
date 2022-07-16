<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-absolute">
    <a href="#/"><img src="../assets/img/logo_fast_coffee.png" alt="Fast Coffee" width="80"></a>

    <div class="md-toolbar-row">
      <div class="md-toolbar-section-end">
        <md-list>
          <md-list-item href="#/cardapio">
            <i class="material-icons">menu_book</i>
            <p>Cardápio</p>
          </md-list-item>

          <md-list-item href="#/novidades">
            <i class="material-icons">new_releases</i>
            <p>Novidades</p>
          </md-list-item>

          <md-list-item href="#/promocao">
            <i class="material-icons">attach_money</i>
            <p>Promoções</p>
          </md-list-item>

          <md-list-item href="#/pedido">
            <i class="material-icons">shopping_cart</i>
            <p>Meu Pedido</p>
          </md-list-item>

          <md-list-item href="#" @click="showDialog = true">
            <i class="material-icons">help</i>
            <p>Solicitar Ajuda</p>
          </md-list-item>

          <md-list-item href="#/login">
            <i class="material-icons">settings</i>
          </md-list-item>
        </md-list>
      </div>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Ajuda solicitada, aguarde!</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">OK</md-button>
      </md-dialog-actions>
    </md-dialog>
  </md-toolbar>

</template>
<script>

export default {
  data() {
    return {
      showDialog: false
    }
  }  
};
</script>
