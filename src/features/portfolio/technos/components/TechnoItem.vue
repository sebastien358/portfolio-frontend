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
    transition: all 1s ease;
    height: 100px;
    @include m.xxl {
      height: 80px;
    }
    @include m.lg {
      height: 80px;
    }
    @include m.sm {
      transition: all 600ms ease;
      height: 45px;
    }
    &:hover {
      transform: scale(2);
    }
  }
}
</style>