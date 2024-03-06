<template>
  <BaseTemplate>
    <div class="bg-page h-100">
      <div v-if="!isLoading">
        <h1 class="text-uppercase text-center">Mes technos</h1>
        <div class="d-flex flex-wrap justify-content-center w-100 container-pictures">
          <TechnoItem
            v-for="techno in technos"
            :key="techno.id"
            :techno="techno"
          />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import TechnoItem from "@/features/portfolio/technos/components/TechnoItem.vue";
import {useTechnoStore} from "@/stores/technoStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const isLoading = ref(true)

const technoStore = useTechnoStore()
const { technos } = storeToRefs(technoStore)

onMounted(async () => {
  await technoStore.getTechno()
  isLoading.value = false
})

</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  padding: 70px 20px 20px 20px;
  height: calc(100vh - 110px);
  @include m.lg {
    min-height: 100%;
    padding-top: 40px;
  }
  @include m.sm {
    height: 100%;
    padding-top: 40px;
  }
}

h1 {
  color: white;
  font-size: 35px;
  font-family: "Kalam", cursive;
  @include m.sm {
    font-size: 25px;
  }
}

.container-pictures {
  margin-top: 90px;
  gap: 50px;
  @include m.xl {
    margin-top: 50px;
  }
  @include m.lg {
    margin-top: 40px;
  }
  @include m.sm {
    margin-top: 30px;
  }
}
</style>