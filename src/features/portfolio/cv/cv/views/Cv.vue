<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="container h-100">
        <div class="d-flex align-items-center justify-content-center py-4 h-100">
          <img src="@/assets/images/CV_2024-01-11_Sébastien_Petit_page-0001.jpg" class="img-cv">
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
}

.img-cv {
  width: 900px;
}
</style>