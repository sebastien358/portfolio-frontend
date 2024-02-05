<template>
  <BaseTemplate>
    <div class="bg-page h-100">
      <div class="container h-100">
        <div class="row d-flex align-items-center justify-content-center py-4 h-100">
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
  background: linear-gradient(0deg, rgba(12, 121, 158, 0.9864146342130602) 0%, rgba(2, 0, 36, 1) 100%);
  height: calc(100vh - 110px);
}

.img-cv {
  width: 900px;
}
</style>