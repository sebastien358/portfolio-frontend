<template>
  <div class="card-portfolio">
    <div class="card-inner">
      <div class="card-front">
        <h6 class="mb-3">{{experience.year}}</h6>
        <h3>{{experience.job}}</h3>
        <div class="d-flex flex-wrap justify-content-center mt-5 mb-2">
          <img v-if="experience.pictures[0]" :src="experience.pictures[0].url" class="img-card-front">
        </div>
        <div class="d-flex align-items-center flex-row justify-content-center mt-5 mb-4">
          <img v-if="experience.pictures[1]" :src="experience.pictures[1].url" class="icon">
          <img v-if="experience.pictures[2]" :src="experience.pictures[2].url" class="icon">
          <img v-if="experience.pictures[3]" :src="experience.pictures[3].url" class="icon">
          <img v-if="experience.pictures[4]" :src="experience.pictures[4].url" class="icon">
          <img v-if="experience.pictures[5]" :src="experience.pictures[5].url" class="icon">
        </div>
        <p class="card-text fs-5">Plus d'info...</p>
      </div>
      <div class="card-back">
        <h3 class="text-start mb-3 w-100"> Objet : {{experience.subject}}</h3>
        <p>{{experience.content[0]}}</p>
        <p>{{experience.content[2]}}</p>
        <p>{{experience.content[4]}}</p>
        <p>{{experience.content[6]}}</p>
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
  width: 500px;
  height: 650px;
  margin: 0 10px 60px 10px;
  @include m.sm {
    width: 100%;
    height: 550px;
    margin: 0 10px 30px 10px;
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
    font-size: 18px;
  }
  h3 {
    font-size: 26px;
    @include m.sm {
      font-size: 23px;
    }
  }
  .img-card-front {
    height: 120px;
    width: 120px;
    @include m.sm {
      height: 110px;
      width: 110px;
    }
  }
  .icon {
    width: 60px;
    height: 60px;
    margin: 0 6px;
    @include m.sm {
      width: 50px;
      height: 50px;
    }
  }
}

.card-back {
  transform: rotateY(-180deg);
  overflow: hidden;
  h3 {
    font-size: 20px;
    @include m.sm {
      font-size: 17px;
    }
  }
  p {
    font-size: 15px;
    line-height: 24px;
    @include m.sm {
      font-size: 14px;
    }
  }
}

.card-portfolio:hover .card-inner {
  transform: rotateY(-180deg);
}
</style>