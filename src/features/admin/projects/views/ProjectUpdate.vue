<template>
  <div v-if="!isLoading" class="w-100 h-100">
      <div class="d-flex flex-column justify-content-center align-items-center w-100 project-update">
        <div class="form-container">
          <p class="title">Project Update</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Year</label>
              <input v-model="editProject.name" type="text" name="year" id="year" required>
            </div>
            <div class="input-group mb-3">
              <label for="url">url</label>
              <input v-model="editProject.url" type="url" name="year" id="year" required>
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

        <div class="d-flex justify-content-center mb-4">
          <button @click="onClickDelete" class="button-delete">Delete</button>
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
  //margin: 0 20px 40px 20px;
  @include m.sm {
    //margin: 0 20px 40px 20px;
    height: initial;
    margin-right: 20px;
  }
  .container-pictures {
    //margin: 40px 20px 40px 20px;
    gap: 20px;
    .img-update {
      height: 300px;
      width: 300px;
      @include m.sm {
        width: 100%;
      }
    }
    .icon-delete-picture {
      color: red;
      margin-top: 10px;
      cursor: pointer;
    }
  }
}

.form-container {
  width: 550px;
  padding: 60px 20px 30px 20px;
  @include m.sm {
    width: 100%;
  }
}

.button-delete {
  background-color: red;
  color: white;
  font-size: 13px;
  padding: 7px;
  border: 0;
}
</style>