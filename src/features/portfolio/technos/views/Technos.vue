<template>
  <BaseTemplate>
    <div class="bg-page pb-5 pb-md-0 px-2">
      <h1 class="text-uppercase text-center">Mes technos</h1>
        <div class="d-flex justify-content-center w-100 mt-5 pt-2 pt-md-5">
          <div class="techno">
            <img src="@/assets/images/html.png">
            <img src="@/assets/images/css-3.webp">
            <img src="@/assets/images/bootstrap_logo-07788d6d.svg">
            <img src="@/assets/images/js.png">
            <img src="@/assets/images/vueJS_logo-22e665fe.png">
            <img src="@/assets/images/pinia.svg">
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
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
  @include m.sm {
   height: auto;
  }
}

h1 {
  padding-top: 70px;
  font-family: "Kalam", cursive;
  font-size: 35px;
  color: var(--color-light);
  @include m.sm {
    padding-top: 40px;
  }
}

.techno {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px;
  @include m.xl {
    grid-template-columns: repeat(3, 1fr);
  }
  @include m.lg {
    grid-template-columns: repeat(3, 1fr);
  }
  @include m.md {
    grid-template-columns: repeat(2, 1fr);
  }
  @include m.sm {
    grid-template-columns: repeat(1, 1fr);
    gap: 70px;
  }
  img {
    width: 230px;
    height: 230px;
    transition: all 380ms ease-in-out;
    @include m.lg {
      width: 180px;
      height: 180px;
    }
    @include m.sm {
      width: 150px;
      height: 150px;
    }
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>