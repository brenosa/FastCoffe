<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
    </div>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div v-if="isEmployee">
            admin
          </div>
          <div v-if="!isEmployee">
            Área restrita para funcionários!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      this.user = this.$route.params.user;
      this.isEmployee = this.user?.userRole === 'employee';
      this.isManager = this.user?.position === 'manager';
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
