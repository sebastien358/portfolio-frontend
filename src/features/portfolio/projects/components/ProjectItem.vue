<template>
  <router-link :to="{name: 'project-details', params: {id: project.id}}" class="link">
    <div class="project">
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex align-items-center justify-content-center project__title">
          <h3 class="m-0">{{project.name}}</h3>
        </div>
        <div class="project__completed">
          <img v-if="project.pictures[0]" :src="project.pictures[0].url" class="img-project-item">
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
  transition: 600ms ease;
  border: 0;
  @include m.mac {
    width: 450px;
  }
  @include m.xxl {
    width: 400px;
  }
  @include m.lg {
    width: 400px;
  }
  @include m.sm {
    transition: 300ms ease;
    width: 350px;
  }
  &:hover {
    transform: scale(1.15);
    @include m.sm {
      transform: scale(1.1);
    }
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
        font-weight: 300;
        font-size: 19px;
      }
    }
  }
  &__completed {
    width: 100%;
    @include m.xxl {
      height: 270px;
    }
    @include m.lg {
      height: 250px;
    }
    @include m.sm {
      height: 230px;
    }
    .img-project-item {
      height: 280px;
      object-fit: cover;
      width: 100%;
      @include m.mac {
        height: 250px;
      }
      @include m.xxl {
        height: 250px;
      }
      @include m.lg {
        height: 250px;
      }
      @include m.sm {
        height: 230px;
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
      height: 39px;
      margin: 0 8px;
      object-fit: cover;
      @include m.sm {
        height: 32px;
      }
    }
  }
}

.link {
  text-decoration: none;
}
</style>