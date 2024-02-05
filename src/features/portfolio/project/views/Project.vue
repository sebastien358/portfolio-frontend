<template>
  <BaseTemplate>
    <div class="bg-page">
      <p>Project</p>
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
  p {
    color: white;
    font-size: 20px;
  }
}
</style>