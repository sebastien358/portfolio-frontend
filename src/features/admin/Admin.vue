<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="d-flex flex-row admin">
        <NavAdmin />
        <router-view v-slot="{Component}">
          <Component :is="Component" />
        </router-view>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import NavAdmin from "@/features/admin/components/NavAdmin.vue";
</script>

<style scoped lang="scss">
.bg-page {
  background: var(--bg-page);
}

.admin {
  height: calc(100vh - 110px);
}
</style>