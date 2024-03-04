<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="d-flex flex-row admin">
        <div class="d-flex flex-column">
          <Transition>
            <NavAdmin
              :open="state.open"
            />
          </Transition>
        </div>
        <div class="w-100">
          <div class="d-flex justify-content-center pt-3">
            <button @click="state.open = !state.open" type="button">menu</button>
          </div>
          <div class="d-flex justify-content-center align-content-center h-100">
            <router-view v-slot="{Component}">
              <Component :is="Component" />
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import NavAdmin from "@/features/admin/components/NavAdmin.vue";
import {reactive} from "vue";

const state = reactive<{
  open: boolean
  isLoading: boolean
}>({
  open: !matchMedia('max-width(max-width: 575.98px)').matches,
  isLoading: matchMedia('max-width(max-width: 575.98px)').matches
})
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: 100%;
}

.admin {
  height: 100%;
  @include m.sm {
    height: 100%;
  }
}

button {
  background-color: #8338ec;
  font-size: 13px;
  padding: 10px 12px;
  color: white;
  border: 0;
  outline: none;
  border-radius: 3px;
  @include m.sm {
    padding: 8px 12px;
  }
}

/* we will explain what these classes do next! */

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>