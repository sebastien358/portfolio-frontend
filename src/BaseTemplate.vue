<template>
  <div class="app-container">
    <Header class="header" />
    <div class="components">
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/views/Header.vue";
import Footer from "@/components/footer/views/Footer.vue";
</script>

<style scoped lang="scss">
.base-template {
  background-color: var(--plain-page);
  min-height: 100dvh;
  width: 100%;
}

.app-container {
  display: grid;
  grid-template-areas: 'header' 'components' 'footer';
  grid-template-rows: 60px 1fr 50px;
  height: 100vh;
}

.header {
  grid-area: header;
}

.components {
  background: var(--background-body);
  grid-area: components;
}

.footer {
  grid-area: footer;
}
</style>