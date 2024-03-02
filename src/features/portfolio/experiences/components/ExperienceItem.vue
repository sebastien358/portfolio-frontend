<template>
  <div class="card-portfolio">
    <div class="card-inner">
      <div class="card-front">
        <h6 class="mb-3">{{experience.year}}</h6>
        <h4 class="mb-3">{{experience.subject}}</h4>
        <h3 class="m-0">{{experience.job}}</h3>
        <div class="d-flex flex-wrap justify-content-center container-image">
          <img v-if="experience.pictures[0]" :src="experience.pictures[0].url" class="img-card-front">
        </div>
        <div class="d-flex align-items-center flex-row justify-content-center">
          <img v-if="experience.pictures[1]" :src="experience.pictures[1].url" class="icon">
          <img v-if="experience.pictures[2]" :src="experience.pictures[2].url" class="icon">
          <img v-if="experience.pictures[3]" :src="experience.pictures[3].url" class="icon">
          <img v-if="experience.pictures[4]" :src="experience.pictures[4].url" class="icon">
          <img v-if="experience.pictures[5]" :src="experience.pictures[5].url" class="icon">

        </div>
        <p class="card-text mt-4">Plus d'info...</p>
      </div>
      <div class="card-back">
        <h3 class="text-start mb-3 w-100"> Objet : {{experience.content[0]}}</h3>
        <p>{{experience.content[2]}}</p>
        <p>{{experience.content[4]}}</p>
        <p>{{experience.content[6]}}</p>
        <p>{{experience.content[8]}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ExperienceInterface} from "@/interfaces";

defineProps<{
  experience: ExperienceInterface
}>()
</script>


<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

// animation card

.card-portfolio {
  width: 480px;
  height: 650px;
  @include m.xxl {
    width: 420px;
    height: 610px;
  }
  @include m.lg {
    width: 360px;
    height: 530px;
  }
  @include m.md {
    width: 380px;
    height: 550px;
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
}

.card-front {
  transform: rotateY(0deg);
  overflow: hidden;
  h6 {
    font-size: 16px;
    @include m.xxl {
      font-size: 15px;
    }
    @include m.sm {
      font-size: 13px;
    }
  }
  h4 {
    font-size: 17px;
    @include m.xxl {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 15px;
    }
  }
  h3 {
    font-size: 22px;
    @include m.xxl {
      font-size: 17px;
    }
    @include m.sm {
      font-size: 16px;
    }
  }
  .container-image {
    margin: 40px 0;
    @include m.sm {
      margin: 25px 0;
    }
    .img-card-front {
      height: 120px;
      width: 120px;
      @include m.xxl {
        width: 100px;
        height: 100px;
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
    @include m.xxl {
      font-size: 15px;
    }
    @include m.sm {
      font-size: 13px;
    }
  }
}

.card-back {
  transform: rotateY(-180deg);
  overflow-y: auto;
  height: 100%;
  h3 {
    font-size: 20px;
    @include m.xxl {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 13px;
    }
  }
  p {
    font-size: 15px;
    line-height: 24px;
    @include m.xxl {
      line-height: 20px;
      font-size: 13px;
    }
    @include m.sm {
      line-height: 18px;
      font-size: 11px;
    }
  }
}

.card-portfolio:hover .card-inner {
  transform: rotateY(-180deg);
}
</style>