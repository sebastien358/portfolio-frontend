<template>
  <BaseTemplate>
    <div class="bg-page">
      <div v-if="!isLoading" class="container-formation">
        <h1 class="text-center text-uppercase">Ma formation</h1>
        <div class="d-flex flex-wrap justify-content-center align-items-center formation">
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
  padding: 50px 20px 30px 20px;
  background: var(--bg-page);
  height: 100%;
  @include m.mac {
    padding: 40px 20px 30px 20px;
  }
  @include m.xxl {

    padding: 40px 20px 30px 20px;
  }
  @include m.xl {

    padding: 40px 20px 30px 20px;
  }
  @include m.lg {

    padding: 40px 20px 30px 20px;
  }
  @include m.sm {

    padding: 30px 20px 30px 20px;
  }
}

.container-formation {
  height: 100%;
  h1 {
    color: white;
    font-size: 35px;
    font-family: "Kalam", cursive;
    @include m.mac {
      font-size: 25px;
    }
    @include m.sm {
      font-size: 20px;
      height: initial;
    }
  }
}

.formation {
  gap: 30px;
  height: 100%;
  @include m.mac {
    height: initial;
    margin-top: 50px;
  }
  @include m.xxl {
    margin-top: 50px;
  }
  @include m.xl {
    margin-top: 50px;
  }
  @include m.lg {
    margin-top: 40px;
    gap: 15px;
  }
  @include m.sm {
    margin-top: 30px;
    gap: 15px;
  }
}
</style>