<template>
  <BaseTemplate>
    <div class="bg-page h-100">
      <div class="container h-100">
        <h1 class="text-center text-white pt-5">Ma formation</h1>
        <div class="row d-flex flex-wrap align-items-center justify-content-center h-100">
          <div class="card-portfolio">
            <div class="card-inner">
              <div class="card-front">
                <h6 class="card-title mb-3">2023-2024 (1 an)</h6>
                <h3 class="fs-2">Développeur Full-Stack</h3>
                <div class="d-flex flex-wrap justify-content-center mt-4">
                  <img src="@/assets/images/studi.jpg" height="120" width="120">
                </div>
                <div class="d-flex align-items-center flex-row justify-content-center mt-5 mb-4">
                  <img src="@/assets/images/js.png" class="icon">
                  <!--<img src="@/assets/images/vueJS_logo-22e665fe.png" class="icon">-->
                  <!--<img src="@/assets/images/logo.svg" class="icon">-->
                  <img src="@/assets/images/php_logo.png" class="mx-3 icon">
                  <img src="@/assets/images/symfony_logo.png" class="icon">
                </div>
                <p class="card-text fs-5">Plus d'info...</p>
              </div>
              <div class="card-back">
                <h5 class="card-title text-start w-100">Missions</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
.bg-page {
  background: linear-gradient(0deg, rgba(12, 121, 158, 0.9864146342130602) 0%, rgba(2, 0, 36, 1) 100%);
  height: calc(100vh - 110px);
}

.card-portfolio {
  width: 500px;
  height: 650px;
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
  p {
    font-size: 16px;
  }
}
</style>