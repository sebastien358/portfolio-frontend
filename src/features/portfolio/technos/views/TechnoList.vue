<template>
  <BaseTemplate>
    <div v-if="!isLoading">
      <div class="bg-page">
        <h1 class="text-uppercase text-center">Mes technos</h1>
        <div class="d-flex justify-content-center">
          <div class="container-techno">
            <TechnoItem
              v-for="techno in technos"
              :key="techno.id"
              :techno="techno"
            />
          </div>
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
  height: calc(100vh - 110px);
  padding-top: 70px;
  @include m.sm {
    padding-top: 40px;
    height: auto;
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

.container-techno {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 60px;
  margin-top: 80px;
  @include m.xxl {
    grid-template-columns: repeat(5, 1fr);
    margin-top: 50px;
  }
  @include m.xxl {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 50px;
  }
  @include m.lg {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;
  }
  @include m.md {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  @include m.sm {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
    gap: 50px;
    margin-bottom: 40px;
  }
}
</style>