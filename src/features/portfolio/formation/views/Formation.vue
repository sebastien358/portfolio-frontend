<template>
  <BaseTemplate>
    <div class="bg-page h-100">
      <div v-if="!isLoading" class="formation">
        <h1 class="text-center text-uppercase m-0">Ma formation</h1>
        <div class="d-flex flex-wrap justify-content-center align-items-center container-formation">
          <FormationItem
            v-for="formation in formations"
            :key="formation.id"
            :formation="formation"
          />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import FormationItem from "@/features/portfolio/formation/components/FormationItem.vue";
import {useFormationStore} from "@/stores/formationStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";

const isLoading = ref(true)

const formationStore = useFormationStore()
const { formations } = storeToRefs(formationStore)

onMounted(async () => {
  await formationStore.getFormations()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  padding: 70px 20px 0 20px;
  background: var(--bg-page);
  @include m.lg {
    padding: 50px 20px 0 20px;
  }
  @include m.sm {
    height: 100%;
    padding: 40px 20px 0 20px;
  }
}

.formation {
  height: 100%;
  @include m.xxl {
    height: auto;
  }
  @include m.sm {
    height: auto;
  }
}

h1 {
  color: white;
  font-size: 40px;
  font-family: "Kalam", cursive;
  @include m.sm {
    font-size: 25px;
  }
}

.container-formation {
  height: 100%;
  gap: 30px;
  @include m.xxl {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  @include m.lg {
    margin-top: 30px;
    margin-bottom: 20px;
    gap: 15px;
  }
  @include m.sm {
    margin-bottom: 20px;
    gap: 15px;
  }
}
</style>