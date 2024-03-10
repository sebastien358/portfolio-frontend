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

.bg-page {
  background: var(--bg-page);
  height: 100%;
  margin-bottom: 20px;
  h1 {
    padding-top: 70px;
    font-family: "Kalam", cursive;
    color: white;
    font-size: 35px;
    @include m.mac {
      font-size: 25px;
      padding-top: 40px;
    }
    @include m.lg {
      font-size: 25px;
      padding-top: 40px;
    }
    @include m.sm {
      padding-top: 30px;
      font-size: 20px;
    }
  }
}

.container-project {
  margin: 60px 20px 40px 20px;
  gap: 25px;
  @include m.mac {
    margin: 40px 10px 40px 10px;
    gap: 20px;
  }
  @include m.xl {
    margin: 40px 10px 40px 10px;
    gap: 20px;
  }
  @include m.lg {
    margin: 40px 10px 40px 10px;
    gap: 20px;
  }
  @include m.md {
    margin: 40px 10px 40px 10px;
    gap: 20px;
  }
  @include m.sm {
    margin: 30px 10px 30px 10px;
    gap: 20px;
  }
}
</style>