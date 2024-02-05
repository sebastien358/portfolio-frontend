<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="row">
        <h1 class="text-center text-uppercase">Mes projets principaux</h1>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
  h1 {
    padding-top: 70px;
    font-family: "Kalam", cursive;
    color: var(--color-light);
    font-size: 35px;
    @include m.sm {
      padding-top: 40px;
      font-size: 30px;
    }
  }
}
</style>