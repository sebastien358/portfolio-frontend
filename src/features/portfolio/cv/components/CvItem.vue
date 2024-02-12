<template>
  <div class="cv-item">
    <img :src="pictureCv.pictures[0].url" class="img-cv">
  </div>
</template>

<script setup lang="ts">
import type {CvInterface} from "@/interfaces";

defineProps<{
  pictureCv: CvInterface
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.cv-item {
  .img-cv {
    height: 1000px;
    transition: 600ms ease;
    object-fit: cover;
    width: 100%;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>