<template>
  <div class="techno">
    <div v-for="img in techno.pictures">
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
    height: 150px;
    @include m.xl {
      height: 130px;
    }
    @include m.lg {
      height: 100px;
    }
    @include m.sm {
      height: 60px;
    }
    &:hover {
      transform: scale(2);
    }
  }
}
</style>