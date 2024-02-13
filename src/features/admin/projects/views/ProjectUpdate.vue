<template>
  <div v-if="!isLoading" class="w-100">
    <div class="mx-2 h-100">
      <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div class="form-container">
          <p class="title">Project Create</p>
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
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.form-container {
  width: 550px;
  padding: 60px 20px 30px 20px;
  @include m.sm {
    width: 100%;
  }
}
</style>