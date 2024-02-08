<template>
  <BaseTemplate>
    <div class="home">
      <div class="d-flex align-items-center justify-content-center">
        <!-- Image bannière -->
        <img src="@/assets/images/laptop-5673901_1280.jpg" class="w-100 object-fit-cover position-relative img-banniere">

        <div class="position-absolute dev-web">
          <div class="d-flex flex-column align-items-center">
            <div class="txt" id="txt">
              <b>S</b><b>E</b><b>B</b><b>A</b><b>S</b><b>T</b><b>I</b><b>E</b><b>N</b>
            </div>
            <div class="txt" id="txt">
              <b>P</b><b>E</b><b>T</b><b>I</b><b>T</b>
            </div>
          </div>
          <div class="my-4">
            <h3 class="text-center text-uppercase">Développeur web</h3>
            <h4 class="text-center mt-2">Portfolio</h4>
          </div>
          <a href="mailto:sebastienpetit27330@gmail.com" class="button">Contactez-moi !</a>
        </div>
      </div>

      <div class="home__experience">
        <!-- Title de la page -->
        <div class="pb-4 pb-lg-5">
          <h5 class="text-white text-center w-100">Mon expérience</h5>
        </div>
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
import ExperienceItem from "@/features/portfolio/experiences/ExperienceItem.vue";

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
    h5 {
      font-size: 35px;
      font-family: "Kalam", cursive;
      white-space: nowrap;
      @include m.sm {
        width: 30px;
      }
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
      border: 1px solid darken(#129ce7, 15);
      background-color: transparent;
      padding: 10px;
      transition: background-color 180ms ease;
      text-decoration: none;
      &:hover {
        border: 1px solid #129ce7;
        background-color: #129ce7;
        color: white;
      }
    }
  }
}

// title animation

#txt{
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  font-family:sans-serif;
  letter-spacing:3.5px;
  font-size:3.5rem;
  font-weight:700;
  position:relative;
  transform-style:preserve-3d;
  perspective:100px;
  -webkit-transform-style:preserve-3d;
  -webkit-perspective:100px;
}
#txt>b{
  height:3.5rem;
  box-shadow:0 .4rem .3rem -.3rem #aaa;
  color:#979c9f;
  background:linear-gradient(#aaf,#acf,#afc);
  background-clip:text;
  text-fill-color:transparent;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  transform-origin:bottom;
  transform:rotateX(-85deg);
  -webkit-transform-origin:bottom;
  -webkit-transform:rotateX(-85deg);
  animation:getUp 7s infinite;
}
#txt>b:nth-child(2){
  animation-delay:.25s;
}
#txt>b:nth-child(3){
  animation-delay:.5s;
}
#txt>b:nth-child(4){
  animation-delay:.75s;
}
#txt>b:nth-child(5){
  animation-delay:1s;
}
#txt>b:nth-child(6){
  animation-delay:1.25s;
}
#txt>b:nth-child(7){
  animation-delay:1.5s;
}
#txt>b:nth-child(8){
  animation-delay:1.75s;
}
@keyframes getUp{
  10%,50%{
    transform:rotateX(0);
  }
  0%,60%,100%{
    transform:rotateX(-85deg);
  }
}
</style>