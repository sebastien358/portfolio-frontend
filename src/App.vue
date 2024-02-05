<template>
  <router-view v-slot="{Component}">
    <Component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>