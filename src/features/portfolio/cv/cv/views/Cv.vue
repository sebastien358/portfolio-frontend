<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="bg-page">
      <div class="container h-100">
        <div class="d-flex align-items-center justify-content-center py-0 py-md-4 h-100">
          <div v-for="pictureCv in cv">
            <img :src="pictureCv.pictures[0].url" class="img-cv">
          </div>
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
  height: calc(100vh - 110px);
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