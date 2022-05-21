<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <ImageSlider></ImageSlider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImageSlider from "../components/ImageSlider";

export default {
  components: {
    ImageSlider
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
</style>
