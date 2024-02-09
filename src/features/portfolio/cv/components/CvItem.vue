<template>
  <img :src="pictureCv.pictures[0].url" class="img-cv">
</template>

<script setup lang="ts">
import type {CvInterface} from "@/interfaces";

defineProps<{
  pictureCv: CvInterface
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.img-cv {
  max-width: 900px;
  transition: 600ms ease;
  &:hover {
    transform: scale(1.05);
  }
  @include m.lg {
    width: 100%;
  }
}
</style>