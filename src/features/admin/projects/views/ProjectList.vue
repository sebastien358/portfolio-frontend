<template>
  <div v-if="!isLoading" class="mx-3 mt-4 w-100 z-0">
    <div class="d-flex justify-content-center">
      <table class="table table-sm table-secondary text-center">
        <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Création</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody v-for="project in projects" :key="project.id">
        <tr>
          <td>{{project.id}}</td>
          <td>{{project.name}}</td>
          <td>{{new Date(project.createdAt).toLocaleDateString('fr-FR')}}</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-eye" class="text-muted icon" />
            <router-link :to="{name: 'admin-project-update', params: {id: project.id}}">
              <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-success icon" />
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useProjectAdminStore} from "@/stores/admin/projectAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const projectAdminStore = useProjectAdminStore()
const { projects } = storeToRefs(projectAdminStore)

onMounted(async () => {
  await projectAdminStore.getProducts()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
.icon {
  margin: 0 2px;
}
</style>