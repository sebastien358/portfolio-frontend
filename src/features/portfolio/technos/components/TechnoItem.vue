<template>
  <div class="techno">
    <div v-for="img in techno.pictures" :key="img.id">
      <img :src="img.url" class="img">
    </div>
  </div>
</template>

<script setup lang="ts">
import type {TechnoInterface} from "@/interfaces";

defineProps<{
  techno: TechnoInterface
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.techno {
  .img {
    transition: all 800ms ease;
    height: 100px;
    @include m.mac {
      height: 70px;
    }
    @include m.xxl {
      height: 70px;
    }
    @include m.lg {
      height: 60px;
    }
    @include m.sm {
      transition: all 400ms ease;
      height: 45px;
    }
    &:hover {
      transform: scale(1.7);
    }
  }
}
</style>