<template>
  <BaseTemplate>
    <div v-if="!isLoading" class="bg-page">
      <h1 class="text-center text-uppercase">Mes projets principaux</h1>
      <!-- Projets réalisé -->
      <div class="d-flex flex-wrap justify-content-center container-project">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>

    <div v-if="!isLoading" class="bg-page">
      <div>
        <h1 class="text-center text-uppercase">Mes autres projets</h1>
        <div class="d-flex justify-content-center container-project">
          <ProjectItem
            v-for="project in projects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import ProjectItem from "@/features/portfolio/projects/components/ProjectItem.vue";
import {useProjectStore} from "@/stores/projectStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const isLoading = ref(true)

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

onMounted(async () => {
  await projectStore.getProducts()
  isLoading.value = false
})

</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.container-project {
  padding: 40px 20px 0 20px;
  @include m.sm {
    padding: 30px 10px 0 10px;
  }
}

.bg-page {
  background: var(--bg-page);
  height: 100vh;
  h1 {
    padding-top: 70px;
    font-family: "Kalam", cursive;
    color: var(--color-light);
    font-size: 35px;
    @include m.lg {
      padding-top: 40px;
      font-size: 27px;
    }
    @include m.sm {
      font-size: 20px;
    }
  }
}
</style>