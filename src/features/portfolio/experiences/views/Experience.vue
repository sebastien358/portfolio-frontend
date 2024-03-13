<template>
  <BaseTemplate>
    <div class="bg-page overflow-hidden position-relative">
      <!-- Image bannière -->
      <div v-if="!isLoading">
        <div class="d-flex justify-content-center align-items-center overflow-hidden position-relative">
          <img src="@/assets/images/laptop-5673901_1920%20(1).jpg" class="img-banner overflow-hidden position-relative">
          <div class="dev-web">
            <!-- texte animation -->
            <div class="d-flex flex-column align-items-center">
              <TextAnimation />
            </div>
            <div class="mt-2 mb-4">
              <h3 class="text-center text-uppercase">Développeur web</h3>
              <h4 class="text-center mt-2">Portfolio</h4>
            </div>
            <a @click="onClickTextButton" href="mailto:sebastienpetit27330@gmail.com" class="button">{{txt}}</a>
          </div>
        </div>
        <!-- container card -->
        <div class="container-card overflow-hidden position-relative">
          <!-- Title de la page -->
          <div class="title-h1 overflow-hidden position-relative">
            <h1 class="text-white text-center w-100">Mon expérience</h1>
          </div>
          <div class="d-flex flex-wrap align-items-center justify-content-center experience-card">
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

const txt = ref('')
txt.value = 'Contactez-moi !'

function onClickTextButton() {
  txt.value = 'Merci !'
  const timeout = setTimeout(() => {
    txt.value = 'Contactez-moi !'
    clearTimeout(timeout)
  }, 2000)
}

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
  height: 100%;
}

.img-banner {
  max-height: 1400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  position: relative;
  @media screen and (max-width: 2300px) {
    max-height: 1180px;
  }
  @include m.mac {
    max-height: 810px;
  }
  @include m.xxl {
    max-height: 700px;
  }
  @include m.xl {
    max-height: 650px;
  }
  @include m.lg {
    max-height: 650px;
  }
  @include m.md {
    max-height: 700px;
  }
  @include m.sm {
    height: 260px;
    max-height: 260px;
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
  padding: 20px 20px 0 20px;
  overflow: hidden;

  position: absolute;
  @include m.mac {
    height: 300px;
    width: 530px;
  }
  @include m.xxl {
    width: 400px;
    height: 220px;
  }
  @include m.lg {
    width: 370px;
    height: 220px;
  }
  @include m.sm {
    background-color: transparent;
    width: 100%;
    height: auto;
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
    border-radius: 4px;
    position: relative;
    bottom: 19px;
    @include m.mac {
      padding: 8px;
    }
    @include m.sm {
      padding: 6px;
      font-size: 12px;
      position: relative;
      bottom: 19px;
    }
    &:hover {
      color: white;
      transform: scale(1.1);
    }
  }
}

.container-card {
  padding: 0 20px;
  .title-h1 h1 {
    font-size: 40px;
    font-family: "Kalam", cursive;
    white-space: nowrap;
    margin: 40px 0;
    @include m.mac {
      margin: 30px 0;
      font-size: 30px;
    }
    @include m.xxl {
      font-size: 30px;
    }
    @include m.sm {
      font-size: 22px;
    }
  }
  .experience-card {
    margin-bottom: 40px;
    gap: 20px;
    @include m.sm {
      margin-bottom: 30px;
    }
  }
}
</style>