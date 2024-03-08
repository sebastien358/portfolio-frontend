<template>
  <div class="card-portfolio">
    <div class="card-inner">
      <div class="card-front">
        <h6 class="card-title m-0">{{formation.year}}</h6>
        <h3 class="m-0 my-3">{{formation.diploma}}</h3>
        <h4 class="m-0">{{formation.job}}</h4>
        <div class="d-flex flex-wrap justify-content-center container-image">
          <img v-if="formation.pictures[0]" :src="formation.pictures[0].url" class="img-card-front">
        </div>
        <div class="d-flex align-items-center flex-row justify-content-center">
          <img v-if="formation.pictures[1]" :src="formation.pictures[1].url" class="icon">
          <img v-if="formation.pictures[2]" :src="formation.pictures[2].url" class="icon">
          <img v-if="formation.pictures[3]" :src="formation.pictures[3].url" class="icon">
          <img v-if="formation.pictures[4]" :src="formation.pictures[4].url" class="icon">
          <img v-if="formation.pictures[5]" :src="formation.pictures[5].url" class="icon">
        </div>
        <p class="card-text mt-4">Plus d'info...</p>
      </div>

      <div class="card-back">
        <div class="techno">
          <span v-if="formation.techno[0]">{{formation.techno[0]}}</span>
        </div>
        <div class="techno">
          <span v-if="formation.techno[1]">{{formation.techno[1]}}</span>
        </div>
        <div class="techno">
          <span v-if="formation.techno[2]" class="mb-1">{{formation.techno[2]}}</span>
          <span v-if="formation.techno[3]" class="mb-1">{{formation.techno[3]}}</span>
          <span v-if="formation.techno[4]">{{formation.techno[4]}}</span>
        </div>

        <div class="techno">
          <span v-if="formation.techno[5]">{{formation.techno[5]}}</span>
        </div>
        <div class="d-flex flex-column align-items-center techno">
          <span v-if="formation.techno[6]">{{formation.techno[6]}}</span>
          <span v-if="formation.techno[7]">{{formation.techno[7]}}</span>
        </div>
        <div class="d-flex flex-column align-items-center techno">
          <span v-if="formation.techno[8]" class="mb-1">{{formation.techno[8]}}</span>
          <span v-if="formation.techno[9]" class="mb-1">{{formation.techno[9]}}</span>
          <span v-if="formation.techno[10]" class="mb-1">{{formation.techno[10]}}</span>
          <span v-if="formation.techno[11]" class="mb-1">{{formation.techno[11]}}</span>
          <span v-if="formation.techno[12]" class="mb-1">{{formation.techno[12]}}</span>
        </div>

        <div class="techno">
          <span  v-if="formation.techno[13]">{{formation.techno[13]}}</span>
        </div>
        <div class="techno">
          <span v-if="formation.techno[14]">{{formation.techno[14]}}</span>
        </div>
        <div class="d-flex flex-column align-items-center techno">
          <span v-if="formation.techno[15]" class="mb-1 text-center">{{formation.techno[15]}}</span>
          <span v-if="formation.techno[16]" class="mb-1 text-center">{{formation.techno[16]}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {FormationInterface} from "@/interfaces";

defineProps<{
  formation: FormationInterface
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.card-portfolio {
  width: 450px;
  height: 630px;
  @include m.xxl {
    width: 400px;
    height: 560px;
  }
  @include m.xl {
    width: 400px;
    height: 560px;
  }
  @include m.sm {
    width: 100%;
    height: 470px;
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
      margin: 25px 0;
    }
    .img-card-front {
      height: 40px;
      width: auto;
      @include m.lg {
        color: white;
        height: 35px;
        width: auto;
      }
      @include m.sm {
        color: white;
        height: 30px;
        width: auto;
      }
    }
  }
  .icon {
    height: 42px;
    margin: 0 7px;
    @include m.xxl {
      width: 45px;
      height: 45px;
    }
    @include m.sm {
      width: 35px;
      height: 35px;
      margin: 0 6px;
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