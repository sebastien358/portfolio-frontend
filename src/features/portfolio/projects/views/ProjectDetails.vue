<template>
  <BaseTemplate>
    <div class="bg-page">
      <div v-if="!isLoading" class="project-details">
        <h1 class="text-center">{{editProject.name}}</h1>
        <a :href="editProject.url" target="_blank" class="mt-5 link">
          <font-awesome-icon icon="fa-solid fa-eye" />
          <span>Voir le site internet</span>
        </a>

        <a :href="editProject.urlSite" target="_blank" class="mt-3 link">
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>Voir le dépot</span>
        </a>

        <div class="mt-4 mt-lg-5 project-details-objectif">
          <h2>Objectif</h2>
          <div class="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
            <div class="d-flex flex-column mb-5 mb-lg-0 me-0 me-lg-5">
              <p v-if="editProject.objectif[0]" class="m-0 mb-1">{{editProject.objectif[0]}}</p>
              <p v-if="editProject.objectif[1]" class="m-0 mb-1">{{editProject.objectif[1]}}</p>
              <p v-if="editProject.objectif[2]" class="m-0">{{editProject.objectif[2]}}</p>
              <p v-if="editProject.objectif[3]" class="m-0">{{editProject.objectif[3]}}</p>
              <p v-if="editProject.objectif[4]" class="m-0">{{editProject.objectif[4]}}</p>
              <p v-if="editProject.objectif[5]" class="m-0">{{editProject.objectif[5]}}</p>
              <p v-if="editProject.objectif[6]" class="m-0">{{editProject.objectif[6]}}</p>
            </div>

            <div class="d-flex align-items-center flex-row">
              <div class="d-flex flex-column">
                <h2 class="mb-3">Technologies utilisées</h2>
                <div class="d-flex flex-row align-content-center">
                  <img v-if="editProject.pictures[1]" :src="editProject.pictures[1].url" class="logo-techno">
                  <img v-if="editProject.pictures[2]" :src="editProject.pictures[2].url" class="logo-techno">
                  <img v-if="editProject.pictures[3]" :src="editProject.pictures[3].url" class="logo-techno">
                  <img v-if="editProject.pictures[4]" :src="editProject.pictures[4].url" class="logo-techno">
                  <img v-if="editProject.pictures[5]" :src="editProject.pictures[5].url" class="logo-techno">
                  <img v-if="editProject.pictures[6]" :src="editProject.pictures[6].url" class="logo-techno">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--d-flex flex-column align-items-lg-center flex-lg-row justify-content-lg-around-->

        <nav class="container-fonctionnality">
          <ul class="list-inline mb-4 mb-lg-5 fonctionnality">
            <h2>Fonctionnalités</h2>
            <li v-if="editProject.fonctionnality[0]">
              {{editProject.fonctionnality[0]}}
            </li>
            <li v-if="editProject.fonctionnality[1]">
              {{editProject.fonctionnality[1]}}
            </li>
            <li v-if="editProject.fonctionnality[2]">
              {{editProject.fonctionnality[2]}}
            </li>
            <li v-if="editProject.fonctionnality[3]">
              {{editProject.fonctionnality[3]}}
            </li>
            <li v-if="editProject.fonctionnality[4]">
              {{editProject.fonctionnality[4]}}
            </li>
            <li v-if="editProject.fonctionnality[5]">
              {{editProject.fonctionnality[5]}}
            </li>
            <li v-if="editProject.fonctionnality[6]">
              {{editProject.fonctionnality[6]}}
            </li>
            <li v-if="editProject.fonctionnality[7]">
              {{editProject.fonctionnality[7]}}
            </li>
            <li v-if="editProject.fonctionnality[8]">
              {{editProject.fonctionnality[8]}}
            </li>
          </ul>

          <ul class="list-inline competence">
            <h2>Compétences</h2>
            <li v-if="editProject.competence[0]">
              {{editProject.competence[0]}}
            </li>
            <li v-if="editProject.competence[1]">
              {{editProject.competence[1]}}
            </li>
            <li v-if="editProject.competence[2]">
              {{editProject.competence[2]}}
            </li>
            <li v-if="editProject.competence[3]">
              {{editProject.competence[3]}}
            </li>
            <li v-if="editProject.competence[4]">
              {{editProject.competence[4]}}
            </li>
            <li v-if="editProject.competence[5]">
              {{editProject.competence[5]}}
            </li>
            <li v-if="editProject.competence[6]">
              {{editProject.competence[6]}}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import Carousel from '@/features/portfolio/projects/views/Carousel.vue';
import {onMounted, ref} from "vue";
import {useProjectStore} from "@/stores/projectStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";

const isLoading = ref(true)

const projectStore = useProjectStore()
const { editProject } = storeToRefs(projectStore)

const route = useRoute()

onMounted(async () => {
  await projectStore.getCurrentProduct(route.params.id)
  isLoading.value = false
})
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  width: 100%;
  min-height: 100%;
  padding: 70px 100px 40px 100px;
  @include m.xxl {
    padding: 70px 20px 40px 20px;
  }
  @include m.xl {
    padding: 40px 20px 40px 20px;
  }
  @include m.lg {
    padding: 30px 20px 40px 20px;
  }
  @include m.sm {
    padding: 30px 10px 40px 10px;
  }
}

.project-details {
  h1 {
    color: white;
    font-size: 35px;
    @include m.mac {
      font-size: 25px;
    }
    @include m.sm {
      font-size: 22px;
    }
  }
}

.project-details-objectif {
  h2, p {
    color: white;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    @include m.mac {
      font-size: 18px;
    }
    @include m.sm {
      font-size: 16px;
    }
  }
  p {
    font-size: 18px;
    @include m.mac {
      font-size: 16px;
    }
    @include m.lg {
      font-size: 14px;
    }
    @include m.sm {
      font-size: 13px;
    }
  }
  img {
    height: 45px;
    width: 45px;
    margin: 0 10px;
    @include m.lg {
      height: 40px;
      width: 40px;
      margin: 0 8px;
    }
    @include m.sm {
      height: 35px;
      width: 35px;
      margin: 0 8px;
    }
  }
}

.link {
  display: flex;
  align-items: center;
  font-size: 22px;
  color: var(--color-light);
  text-decoration: none;
  @include m.mac {
    font-size: 20px;
  }
  @include m.sm {
    font-size: 18px;
  }
  &:hover {
    text-decoration: underline;
  }
  span {
    font-size: 16px;
    margin-left: 5px;
    color: var(--color-light);
    @include m.mac {
      font-size: 14px;
    }
  }
}

.container-fonctionnality {
  margin-top: 60px;
  @include m.lg {
    margin-top: 50px;
  }
  @include m.sm {
    margin-top: 50px;
  }
  .fonctionnality,
  .competence {
    h2 {
      color: white;
      font-weight: 700;
      font-size: 24px;
      @include m.mac {
        font-size: 18px;
      }
      @include m.sm {
        font-size: 16px;
      }
    }
    li {
      font-size: 18px;
      color: white;
      @include m.mac {
        font-size: 16px;
      }
      @include m.lg {
        font-size: 14px;
      }
      @include m.sm {
        font-size: 13px;
      }
    }
  }
}
</style>