<template>
  <div v-if="!isLoading" class="mx-3 mt-4 w-100 z-0">
    <div class="d-flex justify-content-center">
      <table class="table table-sm table-secondary text-center">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Création</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody v-for="techno in technos">
        <tr>
          <td>{{techno.id}}</td>
          <td>{{new Date(techno.createdAt).toLocaleDateString('fr-FR')}}</td>
          <td>
            <router-link :to="{name: 'admin-techno-details', params: {id: techno.id}}">
              <font-awesome-icon icon="fa-solid fa-eye" class="text-muted icon" />
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
import {useTechnoAdminStore} from "@/stores/admin/technoAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const technoAdminStore = useTechnoAdminStore()
const { technos } = storeToRefs(technoAdminStore)

onMounted(async () => {
  await technoAdminStore.getTechno()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
table {
  //background-color: rgba(17, 24, 39, 0.30);
  .icon {
    cursor: pointer;
    margin: 0 3px;
  }
}
</style>