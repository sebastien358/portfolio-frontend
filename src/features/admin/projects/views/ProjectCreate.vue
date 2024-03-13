<template>
  <div v-if="!isLoading" class="w-100 h-100">
    <div class="d-flex justify-content-center align-items-center w-100 project-create">
      <div class="form-container">
        <p class="title">Project Create</p>
        <form @submit.prevent="onSubmit" class="form">
          <div class="input-group mb-3">
            <label for="username">Name</label>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useProjectAdminStore} from "@/stores/admin/projectAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const projectAdminStore = useProjectAdminStore()
const { editProject } = storeToRefs(projectAdminStore)

onMounted(async () => {
  await projectAdminStore.initProject()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await projectAdminStore.projectCreate(pictures.value)
  await router.push({name: 'admin-project-list'})
}

const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.project-create {
  height: 100%;
  padding: 0 10px 0 10px;
  @include m.mac {
    padding: 30px 10px 25px 10px;
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
</style>