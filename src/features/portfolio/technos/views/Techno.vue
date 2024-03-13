<template>
  <BaseTemplate>
    <div class="bg-page">
      <div v-if="!isLoading">
        <h1 class="text-uppercase text-center">Mes technos</h1>
        <div class="container-1200">
          <div class="d-flex flex-wrap justify-content-center w-100 container-pictures">
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
  padding: 70px 20px 20px 20px;
  min-height: 100%;
  @include m.mac {
    padding-top: 40px;
  }
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
  @include m.mac {
    font-size: 25px;
  }
  @include m.sm {
    font-size: 20px;
  }
}

.container-1200 {
  display: block;
  max-width: 1600px;
  margin: auto;
  @include m.mac {
    max-width: 1200px;
  }
}

.container-pictures {
  gap: 50px;
  margin-top: 60px;
  @include m.mac {
    margin-top: 50px;
  }
  @include m.xl {
    margin-top: 50px;
  }
  @include m.lg {
    margin-top: 40px;
  }
  @include m.sm {
    margin-top: 40px;
  }
}
</style>