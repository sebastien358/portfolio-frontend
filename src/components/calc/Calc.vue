<template>
  <Teleport to="body">
    <div class="calc"></div>
  </Teleport>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.calc {
  background-color: rgba(0, 0, 0, 0.40);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
</style>