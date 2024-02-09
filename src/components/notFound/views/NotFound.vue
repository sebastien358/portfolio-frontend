<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="d-flex align-items-center justify-content-center h-100">
        <h3>Cette page n'existe pas !</h3>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
.bg-page {
  padding-top: 70px;
  background: var(--bg-page);
  height: calc(100vh - 110px);
}

h3 {
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
}
</style>

