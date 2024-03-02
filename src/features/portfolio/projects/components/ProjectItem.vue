<template>
  <router-link :to="{name: 'project-details', params: {id: project.id}}" class="link">
    <div class="project">
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center project__title">
          <h3 class="m-0">{{project.name}}</h3>
        </div>
        <div class="project__completed">
          <img v-if="project.pictures[0]" :src="project.pictures[0].url">
        </div>
        <div class="d-flex align-items-center justify-content-center project__logo">
          <img v-if="project.pictures[1]" :src="project.pictures[1].url" class="icon">
          <img v-if="project.pictures[2]" :src="project.pictures[2].url" class="icon">
          <img v-if="project.pictures[3]" :src="project.pictures[3].url" class="icon">
          <img v-if="project.pictures[4]" :src="project.pictures[4].url" class="icon">
          <img v-if="project.pictures[5]" :src="project.pictures[5].url" class="icon">
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type {ProjectInterface} from "@/interfaces";

defineProps<{
  project: ProjectInterface
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.project {
  cursor: pointer;
  width: 550px;
  background-color: white;
  transition: 600ms ease-in-out;
  @include m.xxl {
    width: 470px;
  }
  @include m.lg {
    width: 450px;
  }
  @include m.sm {
    min-width: 100%;
  }
  &__title {
    height: 65px;
    background-color: rgba(169, 197, 202, 0.60);
    width: 100%;
    @include m.sm {
      height: 55px;
    }
    h3 {
      font-size: 24px;
      color: black;
      font-weight: 200;
      @include m.sm {
        font-size: 19px;
      }
    }
  }
  &__completed {
    width: 100%;
    height: 300px;
    @include m.xxl {
      height: 270px;
    }
    @include m.lg {
      height: 250px;
    }
    @include m.sm {
      height: 230px;
    }
    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      @include m.xxl {
        height: 270px;
      }
      @include m.lg {
        height: 250px;
      }
      @include m.sm {
        height: 230px;
        width: 100%;
      }
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
      width: auto;
      height: 40px;
      margin: 0 8px;
      object-fit: cover;
      @include m.sm {
        height: 35px;
      }
    }
  }
}

.project:hover {
  transform: scale(1.2);
  @include m.sm {
    transform: scale(1.1);
  }
}

.link {
  text-decoration: none;
}
</style>