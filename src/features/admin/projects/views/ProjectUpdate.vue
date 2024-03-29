<template>
  <div v-if="!isLoading" class="w-100 h-100">
      <div class="d-flex flex-column justify-content-center align-items-center w-100 h-100 project-update">
        <div class="form-container">
          <p class="title">Project Update</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Year</label>
              <input v-model="editProject.name" type="text" name="year" id="year" required>
            </div>
            <div class="input-group mb-3">
              <label for="url">url site</label>
              <input v-model="editProject.urlSite" type="url" name="year-site" id="url-site" required>
            </div>
            <div class="input-group mb-3">
              <label for="url">url</label>
              <input v-model="editProject.url" type="url" name="year" id="year" required>
            </div>
            <div class="input-group mb-3">
              <label for="objectif">Objectif</label>
              <textarea v-model="editProject.objectif" name="content" id="content" required></textarea>
            </div>
            <div class="input-group mb-3">
              <label for="fonctionnality">Fonctionnality</label>
              <textarea v-model="editProject.fonctionnality" name="fonctionnality" id="content" required></textarea>
            </div>
            <div class="input-group mb-3">
              <label for="competence">Compétences</label>
              <textarea v-model="editProject.competence" name="competence" id="content" required></textarea>
            </div>
            <div class="my-3">
              <label for="password">Images</label>
              <input @change="onClickInputFiles" ref="inputFiles" type="file" name="picture" class="ms-1 picture">
            </div>
            <button type="submit" class="sign">Send</button>
          </form>
        </div>

        <div class="d-flex flex-wrap justify-content-center container-pictures">
          <div v-for="picture in editProject.pictures">
            <div class="d-flex flex-column align-items-center">
              <img :src="picture.url" class="img-update">
              <font-awesome-icon @click="onClickDeletePicture(picture.id)" icon="fa-solid fa-trash" class="icon-delete-picture" />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button @click="onClickDelete" class="button">Delete</button>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useProjectAdminStore} from "@/stores/admin/projectAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const projectAdminStore = useProjectAdminStore()
const { editProject } = storeToRefs(projectAdminStore)

const route = useRoute()

onMounted(async () => {
  await projectAdminStore.getCurrentProduct(route.params.id)
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await projectAdminStore.projectUpdate(route.params.id, pictures.value)
  await router.push({name: 'admin-project-list'})
}

const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}

const onClickDelete = async () => {
  await projectAdminStore.deleteProject(route.params.id)
  await router.push({name: 'admin-project-list'})
}

const onClickDeletePicture = async (id: number) => {
  await projectAdminStore.deletePictureProject(id)
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.project-update {
  height: 100%;
  padding: 40px 20px 40px 20px;
  @include m.lg {
    padding: 0 20px 50px 20px;
    height: initial;
  }
  @include m.sm {
   padding: 0 20px 50px 20px;
    height: initial;
  }
}

.form-container {
  width: 550px;
  padding: 60px 20px 30px 20px;
  margin: 0 10px;
  @include m.lg {
    width: 450px;
  }
  @include m.sm {
    padding: 20px 20px 20px 20px;
    width: 100%;
  }
  button {
    padding: 8px;
    font-size: 13px;
    @include m.lg {
      padding: 6px;
      font-size: 13px;
    }
    @include m.sm {
      padding: 6px;
      font-size: 12px;
    }
  }
  .label-file {
    color: var(--color-light);
    font-size: 13px;
  }
  input[type="file"] {
    color: var(--color-light);
    font-size: 13px;
  }
}

.container-pictures {
  margin: 50px 0 50px 0;
  gap: 40px;
  @include m.sm {
    gap: 30px;
  }
  .img-update {
    height: 80px;
    @include m.sm {
      height: 45px;
      width: 100%;
    }
  }
  .icon-delete-picture {
    color: red;
    margin-top: 10px;
    cursor: pointer;
    @include m.sm {
     font-size: 11px;
    }
  }
}

button {
  background-color: red;
  color: white;
  border: 0;
  outline: none;
  font-size: 13px;
  padding: 7px;
  border-radius: 3px;
  @include m.sm {
    padding: 6px;
    font-size: 12px;
  }
}
</style>