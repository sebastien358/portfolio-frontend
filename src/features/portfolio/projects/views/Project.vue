<template>
  <BaseTemplate>
    <div class="bg-page">
        <h1 class="text-center text-uppercase">Mes projets principaux</h1>
        <!-- Projets réalisé -->
        <div class="d-flex justify-content-center my-5 py-3">
          <div class="project">
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex align-items-center justify-content-center project__title">
                <h3>Portfolio</h3>
              </div>
              <div class="project__completed">
                <img src="@/assets/images/portfolio.png">
              </div>
              <div class="d-flex align-items-center justify-content-center project__logo">
                <img src="@/assets/images/js.png" class="icon">
                <img src="@/assets/images/vueJS_logo-22e665fe.png" class="icon">
                <img src="@/assets/images/pinia.svg" class="icon">
                <img src="@/assets/images/php_logo.png" class="icon-php">
                <img src="@/assets/images/symfony_logo.png" class="icon-symfony">
              </div>
            </div>
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
  h1 {
    padding-top: 70px;
    font-family: "Kalam", cursive;
    color: var(--color-light);
    font-size: 35px;
    @include m.sm {
      padding-top: 40px;
      font-size: 30px;
    }
  }
}

// Projets

.project {
  cursor: pointer;
  width: 550px;
  background-color: white;
  transition: 600ms ease-in-out;
  &__title {
    height: 65px;
    background-color: rgba(169, 197, 202, 0.60);
    width: 100%;
    h3 {
      font-weight: 200;
    }
  }
  &__completed {
    width: 100%;
    height: 300px;
    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }
  &__logo {
    height: 75px;
    padding: 20px 0;
    background-color: rgba(169, 197, 202, 0.60);
    width: 100%;
    .icon {
      width: 40px;
      height: 40px;
      margin: 0 8px;
      object-fit: cover;
    }
    .icon-php {
      width: 60px;
      height: 40px;
      margin: 0 8px;
    }
    .icon-symfony {
      width: 40px;
      height: 45px;
      margin: 0 8px;
    }
  }
}

.project:hover {
  transform: scale(1.2);
}
</style>