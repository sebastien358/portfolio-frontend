<template>
  <BaseTemplate>
    <div class="bg-page">
      <h1 class="text-center text-uppercase">Mes projets principaux</h1>
      <!-- Projets réalisé -->
      <div class="d-flex justify-content-center container-project">
        <div class="project">
          <div class="d-flex flex-column align-items-center">
            <div class="d-flex align-items-center justify-content-center project__title">
              <h3 class="m-0">Portfolio</h3>
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

    <div class="bg-page">
      <div>
        <h1 class="text-center text-uppercase">Mes autres projets</h1>
        <div class="d-flex justify-content-center container-project">
          <div class="project">
            <div class="d-flex flex-column align-items-center">
              <div class="d-flex align-items-center justify-content-center project__title">
                <h3 class="m-0">Portfolio</h3>
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
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.container-project {
  padding: 40px 20px 0 20px;
  @include m.sm {
    padding: 30px 20px 0 20px;
  }
}

.bg-page {
  background: var(--bg-page);
  height: 100vh;
  h1 {
    padding-top: 70px;
    font-family: "Kalam", cursive;
    color: var(--color-light);
    font-size: 35px;
    @include m.sm {
      padding-top: 40px;
      font-size: 25px;
    }
  }
}

// Projets

.project {
  cursor: pointer;
  width: 550px;
  background-color: white;
  transition: 600ms ease-in-out;
  @include m.sm {
    width: 100%;
  }
  &__title {
    height: 65px;
    background-color: rgba(169, 197, 202, 0.60);
    width: 100%;
    @include m.sm {
     height: 55px;
    }
    h3 {
      font-weight: 200;
      @include m.sm {
        font-size: 19px;
      }
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
    @include m.sm {
      height: 60px;
    }
    .icon {
      width: 40px;
      height: 40px;
      margin: 0 8px;
      object-fit: cover;
      @include m.sm {
        width: 35px;
        height: 35px;
      }
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
  @include m.sm {
    transform: scale(1.1);
  }
}
</style>