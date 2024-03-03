<template>
  <BaseTemplate>
    <div class="bg-page">
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

        <div class="container-card">
          <!-- Title de la page -->
          <div class="title-h1">
            <h1 class="text-white text-center w-100">Mon expérience</h1>
          </div>

          <!-- Card expériences -->
          <div v-if="!isLoading" class="d-flex flex-wrap align-items-center justify-content-center experience-card">
            <ExperienceItem
              v-for="experience in experiences"
              :key="experience.id"
              :experience="experience"
            />
          </div>
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

.bg-page {
  background: var(--bg-page);
  padding: 50px 0 40px 0;
  height: 100%;
  @include m.lg {
    padding: 40px 0 30px 0;
  }
  @include m.sm {
    padding: 30px 0 20px 0;
  }
}

.home {
  .img-banniere {
    max-height: 1300px;
    @include m.sm {
      height: auto;
    }
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
      font-weight: 900;
      font-size: 22px;
      @include m.xxl {
        font-size: 17px;
      }
      @include m.sm {
        font-size: 16px;
      }
    }
    h4 {
      color: white;
      font-size: 16px;
      font-weight: 800;
    }
    .button {
      border: 1px solid #70a1ff;
      background-color: #70a1ff;
      color: white;
      padding: 10px;
      transition: all 250ms ease;
      text-decoration: none;
      font-size: 13px;
      @include m.sm {
        padding: 7px;
        font-size: 12px;
      }
      &:hover {
        border: 1px solid #70a1ff;
        background-color: transparent;
        color: white;
        transform: scale(1.07);
      }
    }
  }
}

.home {
  .container-card {
    padding: 0 20px;
    .title-h1 {
      h1 {
        font-size: 35px;
        font-family: "Kalam", cursive;
        white-space: nowrap;
        margin-top: 40px;
        margin-bottom: 40px;
        @include m.xxl {
          font-size: 25px;
        }
        @include m.sm {
          margin-top: 30px;
          margin-bottom: 30px;
          font-size: 22px;
        }
      }
    }
    .experience-card {
      gap: 20px;
    }
  }
}
</style>