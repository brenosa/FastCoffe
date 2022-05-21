<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-absolute" :class="extraNavClasses">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Fast Coffee</h3>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <md-list>
              <md-list-item href="#">
                <i class="material-icons">content_paste</i>
                <p>Documentation</p>
              </md-list-item>

              <md-list-item href="#">
                <i class="material-icons">cloud_download</i>
                <p>Download</p>
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
