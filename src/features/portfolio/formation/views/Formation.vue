<template>
  <BaseTemplate>
    <div class="bg-page">
      <h1 class="text-center text-uppercase m-0">Ma formation</h1>
      <div class="d-flex justify-content-center align-items-center container-formation">
        <div class="card-portfolio">
          <div class="card-inner">
            <div class="card-front">
              <h3 class="card-title mb-3">2023-2024 (1 an)</h3>
              <h2 class="fs-2 mb-3">Titre professionnel</h2>
              <h4 class="fs-4">Développeur web</h4>
              <div class="d-flex flex-wrap justify-content-center mt-4">
                <img src="@/assets/images/studi.jpg" height="120" width="120">
              </div>
              <div class="d-flex align-items-center flex-row justify-content-center mt-5 mb-4">
                <img src="@/assets/images/js.png" class="icon">
                <!--<img src="@/assets/images/vueJS_logo-22e665fe.png" class="icon">-->
                <!--<img src="@/assets/images/sass.svg" class="icon">-->
                <img src="@/assets/images/php_logo.png" class="mx-3 icon">
                <img src="@/assets/images/symfony_logo.png" class="icon">
              </div>
              <p class="card-text fs-5">Plus d'info...</p>
            </div>
            <div class="card-back">
              <div class="techno">
                <span class="text-uppercase">html5</span>
              </div>
              <div class="techno">
                <span class="text-uppercase">css3</span>
              </div>
              <div class="techno">
                <span class="mb-1">Images</span>
                <span class="mb-1">sons</span>
                <span>vidéos</span>
              </div>

              <div class="techno">
                <span>JavaScript</span>
              </div>
              <div class="d-flex flex-column align-items-center techno">
                <!--<span>Vue.js</span>
                <span>Pinia</span>-->
                <span class="text-uppercase">js</span>
                <span class="text-uppercase">dom</span>
              </div>
              <div class="techno">
                <!--<span class="mb-1">Composants</span>
                <span class="mb-1">Router</span>
                <span class="mb-1">Props</span>-->
                <span class="mb-1">Variables</span>
                <span class="mb-1">Tableau</span>
                <span class="mb-1">Object</span>
                <span class="mb-1">Boucle for, while</span>
                <span class="mb-1">Evénements</span>
                <!--<span class="mb-1">Vuex</span>
                <span class="mb-1">Store</span>-->
              </div>

              <div class="techno">
                <span class="text-uppercase">php</span>
              </div>
              <div class="techno">
                <span>Symfony</span>
              </div>
              <div class="techno">
                <span class="mb-1 text-center">Base de données</span>
                <span class="mb-1 text-center">Organiser et gérer</span>
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

.bg-page {
  padding-top: 70px;
  background: var(--bg-page);
  height: calc(100vh - 110px);
  @include m.sm {
    padding-top: 50px;
  }
}

h1 {
  color: white;
  font-size: 35px;
  font-family: "Kalam", cursive;
  @include m.sm {
    font-size: 30px;
  }
}

.container-formation {
  height: 100%;
  @include m.sm {
    height: auto;
    margin-top: 40px;
  }
}

.card-portfolio {
  width: 500px;
  height: 650px;
  margin: 0 10px 0 10px;
  @include m.sm {
    width: 100%;
  }
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.card-portfolio:hover .card-inner {
  transform: rotateY(-180deg);
}

.card-front,
.card-back {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--background-card-dark);
  font-size: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  padding: 20px;
}

.card-front {
  transform: rotateY(0deg);
  h6 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 6px;
  }
}

.card-back {
  transform: rotateY(-180deg);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  .techno {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: var(--background-light);
    padding: 20px 10px;
    overflow: hidden;
    width: auto;
    @include m.sm {
      padding: 10px;
    }
    span {
      font-weight: 500;
      font-size: 14px;
      @include m.sm {
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
}
</style>