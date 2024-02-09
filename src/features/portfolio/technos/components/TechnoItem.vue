<template>
  <div class="techno">
    <div v-for="img in techno.pictures">
      <img :src="img.url">
    </div>
  </div>
</template>

<script setup lang="ts">
import type {TechnoInterfaces} from "@/interfaces";

defineProps<{
  techno: TechnoInterfaces
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.techno {
  img {
    transition: all 1s ease;
    width: 160px;
    height: 160px;
    @include m.sm {
      width: 130px;
      height: 130px;
    }
    &:hover {
      transform: scale(2);
    }
  }
}
</style>