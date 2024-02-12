<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="bg-page">
      <div class="container h-100">
        <div class="d-flex align-items-center justify-content-center py-3 py-md-4 h-100">
          <CvItem
            v-for="pictureCv in cv"
            :key="pictureCv.id"
            :pictureCv="pictureCv"
          />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useCvStore} from "@/stores/cvStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import CvItem from "@/features/portfolio/cv/components/CvItem.vue";

const isLoading = ref(true)

const cvStore = useCvStore()
const { cv } = storeToRefs(cvStore)

onMounted(async () => {
  await cvStore.getCv()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  min-height: 100%;
  height: 100%;
}

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