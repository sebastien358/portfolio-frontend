<template>
  <BaseTemplate>
    <div class="home">
      <div class="d-flex align-items-center justify-content-center">
        <!-- Image bannière -->
        <img src="@/assets/images/laptop-5673901_1280.jpg" class="w-100 object-fit-cover position-relative img-banniere">

        <div class="position-absolute dev-web">
          <div class="d-flex flex-column align-items-center">
            <TextAnimation />
          </div>
          <div class="mt-2 mt-md-4 mb-4">
            <h3 class="text-center text-uppercase">Développeur web</h3>
            <h4 class="text-center mt-2">Portfolio</h4>
          </div>
          <a href="mailto:sebastienpetit27330@gmail.com" class="button">Contactez-moi !</a>
        </div>
      </div>

      <div class="home__experience">
        <!-- Title de la page -->
        <h1 class="text-white text-center w-100 title-h1">Mon expérience</h1>
        <!-- Card expériences -->
        <div v-if="!isLoading" class="d-flex flex-wrap align-items-center justify-content-center">
          <ExperienceItem
            v-for="experience in experiences"
            :key="experience.id"
            :experience="experience"
          />
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useExperienceStore} from "@/stores/experienceStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import ExperienceItem from "@/features/portfolio/experiences/components/ExperienceItem.vue";
import TextAnimation from "@/features/portfolio/experiences/components/TextAnimation.vue";

const isLoading = ref(true)

const experienceStore = useExperienceStore()
const { experiences } = storeToRefs(experienceStore)

onMounted(async () => {
  await experienceStore.getExperiences()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.home {
  .img-banniere {
    max-height: 1600px;
  }
  .dev-web {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.40);
    height: 350px;
    width: 600px;
    padding: 20px;
    overflow: hidden;
    @include m.sm {
      width: 100%;
      height: auto;
    }
    @include m.lg {
      width: 100%;
      height: auto;
      background-color: transparent;
    }
    h3 {
      color: white;
      font-size: 20px;
      font-weight: 900;
    }
    h4 {
      color: white;
      font-size: 16px;
      font-weight: 800;
    }
    .button {
      border: 1px solid #9980FA;
      color: #9980FA;
      background-color: transparent;
      padding: 10px;
      transition: background-color 180ms ease;
      text-decoration: none;
      font-size: 13px;
      &:hover {
        border: 1px solid #01a3a4;
        background-color: #9980FA;
        color: white;
      }
      @include m.sm {
        padding: 8px;
        border: 1px solid #9980FA;
        font-size: 13px;
        color: #9980FA;
      }
    }
  }
  &__experience {
    background: var(--bg-page);
    height: 100%;
    width: 100%;
    padding-top: 50px;
    @include m.lg {
      height: 100%;
      padding-top: 40px;
    }
    @include m.sm {
      height: 100%;
      padding-top: 30px;
    }
    .title-h1 {
      font-size: 35px;
      font-family: "Kalam", cursive;
      white-space: nowrap;
      margin-bottom: 40px;
      @include m.sm {
        margin-bottom: 30px;
        width: 20px;
      }
    }
  }
}

// title animation


</style>