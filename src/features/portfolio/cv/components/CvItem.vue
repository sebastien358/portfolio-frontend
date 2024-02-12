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
  width: 700px;
  overflow-x: auto;
}

.img-cv {

  height: 1000px;
  transition: 600ms ease;
  object-fit: cover;
  width: 700px;
  overflow-x: auto;
  &:hover {
    transform: scale(1.05);
  }
  @include m.xl {
    overflow: auto;
    width: 100%;
  }
  @include m.lg {
    overflow: auto;
    width: 100%;
  }
  @include m.md {
    overflow: auto;
    width: 100%;
  }
  @include m.sm {
    //width: 700px;
    overflow-x: auto;

  }
}
</style>