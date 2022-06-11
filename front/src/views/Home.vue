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
import axios from "axios";
import ImageSlider from "../components/ImageSlider";

export default {
  components: {
    ImageSlider
  },
  created() {
    this.wakeUpHeroku();
  },
  methods: {
    wakeUpHeroku() {
      console.log(process.env.VUE_APP_SERVER_URL)
      axios
        .get(process.env.VUE_APP_SERVER_URL + "wakeup")
        .then((res) => {
          console.log(res.data);      
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
</style>
