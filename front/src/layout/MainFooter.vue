<template>
  <footer class="footer" :class="{ [`footer-${type}`]: type }">
    <div class="container">
      <span class="foot-text"> Criado por: Breno de Almeida Sá</span>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    type: String
  },
};
</script>

<style>
.foot-text {
  color: #CDCDCD
}
</style>
