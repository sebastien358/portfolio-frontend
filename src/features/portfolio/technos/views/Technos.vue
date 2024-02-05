<template>
  <BaseTemplate>
    <div class="bg-page">
      <h1 class="text-uppercase text-center pt-5">Mes technos</h1>

      <div class="d-flex justify-content-center w-100 mt-5 pt-5">
        <div class="techno">
          <img src="@/assets/images/html.png">
          <img src="@/assets/images/css-3.webp">
          <img src="@/assets/images/bootstrap_logo-07788d6d.svg">
          <img src="@/assets/images/js.png">
          <img src="@/assets/images/vueJS_logo-22e665fe.png">
          <img src="@/assets/images/logo.svg">
          <img src="@/assets/images/php_logo.png">
          <img src="@/assets/images/symfony_logo.png">
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
.bg-page {
  background: linear-gradient(0deg, rgba(12, 121, 158, 0.9864146342130602) 0%, rgba(2, 0, 36, 1) 100%);
  height: calc(100vh - 110px);
}

h1 {
  font-family: "Kalam", cursive;
  font-size: 35px;
  color: var(--color-light);
}

.techno {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  img {
    width: 250px;
    height: 250px;
    transition: all 350ms ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>