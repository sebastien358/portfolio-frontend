<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="row pt-5">
        <h1 class="text-center text-uppercase">Mes projets principaux</h1>
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
  h1 {
    font-family: "Kalam", cursive;
    color: var(--color-light);
    font-size: 35px;
  }
}
</style>