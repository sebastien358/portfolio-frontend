<template>
  <div class="d-flex justify-content-center base-template">
    <div class="app-container">
      <Header class="header" />
      <div class="components">
        <slot />
      </div>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/views/Header.vue";
import Footer from "@/components/footer/views/Footer.vue";
</script>

<style scoped lang="scss">
.base-template {
  background-color: var(--background-body);
  min-height: 100vh;
}

.app-container {
  width: var(--width-page);
  display: grid;
  grid-template-areas: 'header' 'components' 'footer';
  grid-template-rows: 60px 1fr 50px;
}

.header {
  grid-area: header;
}

.components {
  background-color: white;
  grid-area: components;
}

.footer {
  grid-area: footer;
}
</style>