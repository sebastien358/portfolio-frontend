<template>
  <div v-if="!isLoading" class="mx-3 mt-4 w-100 z-0">
    <div class="d-flex justify-content-center">
      <table class="table table-sm table-secondary text-center">
        <thead>
        <tr>
          <th scope="col">Job</th>
          <th scope="col">Subject</th>
          <th scope="col">Création</th>
          <th scope="col">Year</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody v-for="experience in experiences" :key="experience.id">
        <tr>
          <td>{{experience.job}}</td>
          <td>{{experience.subject}}</td>
          <td>{{new Date(experience.createdAt).toLocaleDateString('fr-FR')}}</td>
          <td>{{experience.year}}</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-eye" class="text-muted icon" />
            <router-link :to="{name: 'admin-experience-update', params: {id: experience.id}}">
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
  import {useExperienceAdminStore} from "@/stores/admin/experienceAdminStore";
  import {storeToRefs} from "pinia";

  const isLoading = ref(true)

  const experienceAdminStore = useExperienceAdminStore()
  const { experiences } = storeToRefs(experienceAdminStore)

  onMounted(async () => {
    await experienceAdminStore.getExperiences()
    isLoading.value = false
  })
</script>

<style scoped lang="scss">
table {
  .icon {
    cursor: pointer;
    margin: 0 3px;
  }
}
</style>