<template>
  <footer class="d-flex align-items-center justify-content-center">
    <router-link :to="{name: 'illustration-source'}" class="link">
      <p class="m-0">Sources des illustrations</p>
    </router-link>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

footer {
  background-color: var(--background-headband-dark);
  color: white;
  .link {
    font-size: 20px;
    color: var(--color-light);
    text-decoration: none;
    transition: all 250ms ease;
    p {
      font-size: 19px;
      @include m.lg {
        font-size: 18px;
      }
      @include m.sm {
        font-size: 16px;
      }
      &:hover {
        color: var(--color-dark);
      }
    }
  }
}
</style>