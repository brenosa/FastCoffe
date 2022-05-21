<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-absolute" :class="extraNavClasses">
  <img src="../assets/img/logo_fast_coffee.png"  alt="Fast Coffee" width="80">
    <div class="md-toolbar-row md-collapse-lateral">   
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <md-list>
              <md-list-item href="#">
                <i class="material-icons">menu_book</i>
                <p>Cardápio</p>
              </md-list-item>

              <md-list-item href="#">
                <i class="material-icons">new_releases</i>
                <p>Novidades</p>
              </md-list-item>

               <md-list-item href="#">
                <i class="material-icons">attach_money</i>
                <p>Promoções</p>
              </md-list-item>

               <md-list-item href="#">
                <i class="material-icons">shopping_cart</i>
                <p>Meu Pedido</p>
              </md-list-item>

               <md-list-item href="#">
                <i class="material-icons">help</i>
                <p>Solicitar Ajuda</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>
<script>

export default {};
</script>
