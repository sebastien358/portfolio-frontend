<template>
  <footer class="d-flex align-items-center justify-content-center">
    <router-link to="#" class="link">
      Sources des illustrations
    </router-link>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
footer {
  background-color: var(--background-headband-dark);
  color: white;
  .link {
    font-size: 20px;
    color: var(--color-light);
    text-decoration: none;
    transition: all 250ms ease;
    &:hover {
      color: var(--color-dark);
    }
  }
}
</style>