<template>
  <BaseTemplate>
    <div class="bg-page h-100">
      <h1 class="text-center text-uppercase m-0">Ma formation</h1>
      <div class="d-flex justify-content-center align-items-center container-formation h-100">
        <div class="card-portfolio">
          <div class="card-inner">
            <div class="card-front">
              <h6 class="card-title m-0 mb-3">2023-2024 (1 an)</h6>
              <h3 class="m-0 mb-3">Titre professionnel</h3>
              <h4 class="m-0">Développeur web</h4>
              <div class="d-flex flex-wrap justify-content-center container-image">
                <img src="@/assets/images/Studi_logo.svg.png" class="img-card-front">
              </div>
              <div class="d-flex align-items-center flex-row justify-content-center">
                <img src="@/assets/images/js.png" class="icon">
                <img src="@/assets/images/php_logo.png" class="mx-3 icon">
                <img src="@/assets/images/symfony_logo.png" class="icon">
              </div>
              <p class="card-text mt-4">Plus d'info...</p>
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
                <span class="text-uppercase">js</span>
                <span class="text-uppercase">dom</span>
              </div>
              <div class="d-flex flex-column align-items-center techno">
                <span class="mb-1">Variables</span>
                <span class="mb-1">Tableau</span>
                <span class="mb-1">Object</span>
                <span class="mb-1">Boucle for, while</span>
                <span class="mb-1">Evénements</span>
              </div>

              <div class="techno">
                <span class="text-uppercase">php</span>
              </div>
              <div class="techno">
                <span>Symfony</span>
              </div>
              <div class="d-flex flex-column align-items-center techno">
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
  min-height: 100%;
  @include m.sm {
    padding-top: 50px;
  }
}

h1 {
  color: white;
  font-size: 35px;
  font-family: "Kalam", cursive;
  @include m.sm {
    font-size: 25px;
  }
}

.container-formation {
  height: 100%;
  padding: 40px 0 40px 0;
  @include m.lg {
    padding: 30px 0 30px 0;
    height: auto;
  }
  @include m.sm {
    padding: 20px 0 20px 0;
    height: auto;
  }
}

.card-portfolio {
  width: 480px;
  height: 650px;
  margin: 0 20px 40px 20px;
  @include m.sm {
    width: 100%;
    height: 470px;
    margin: 0 20px 20px 20px;
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
  width: 100%;
  height: 100%;
  background-color: var(--background-card-dark);
  font-size: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backface-visibility: hidden;
}

.card-front {
  transform: rotateY(0deg);
  overflow: hidden;
  h4 {
    font-size: 20px;
    font-weight: 700;
    @include m.xxl {
      font-size: 20px;
    }
    @include m.sm {
      font-size: 17px;
    }
  }
  h6 {
    font-size: 14px;
    @include m.xxl {
      font-size: 13px;
    }
    @include m.sm {
      font-size: 13px;
    }
  }
  h3 {
    font-size: 16px;
    @include m.xxl {
      font-size: 15px;
    }
    @include m.sm {
      font-size: 14px;
    }
  }
  .container-image {
    margin: 40px 0;
    @include m.sm {
      margin: 35px 0;
    }
    .img-card-front {
      height: 55px;
      width: auto;
      @include m.lg {
        color: white;
        height: 50px;
        width: auto;
      }
      @include m.sm {
        color: white;
        height: 42px;
        width: auto;
      }
    }
  }
  .icon {
    width: 50px;
    height: 50px;
    margin: 0 6px;
    @include m.xxl {
      width: 45px;
      height: 45px;
    }
    @include m.sm {
      width: 35px;
      height: 35px;
    }
  }
  p {
    font-size: 17px;
    @include m.sm {
      font-size: 14px;
    }
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
    padding: 10px 10px;
    overflow: hidden;
    width: auto;
    @include m.sm {
      padding: 6px;
    }
    span {
      font-weight: 500;
      font-size: 13px;
      @include m.sm {
        font-weight: 400;
        font-size: 11px;
      }
    }
  }
}
</style>