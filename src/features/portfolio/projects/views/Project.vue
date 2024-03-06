<template>
  <BaseTemplate>
    <div class="bg-page">
      <div v-if="!isLoading">
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
  padding: 60px 20px 0 20px;
  gap: 30px;
  @include m.sm {
    padding: 20px 10px 0 10px;
    gap: 20px;
  }
}

.bg-page {
  background: var(--bg-page);
  height: 100%;
  margin-bottom: 20px;
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