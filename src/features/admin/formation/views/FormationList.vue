<template>
  <div v-if="!isLoading" class="w-100 z-0">
    <div class="d-flex justify-content-center">
      <table>
        <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Job</th>
          <th scope="col">Création</th>
          <th scope="col">Diploma</th>
          <th scope="col">Technos</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody v-for="formation in formations" :key="formation.id">
        <tr>
          <td>{{formation.year}}</td>
          <td>{{formation.job}}</td>
          <td>{{new Date(formation.createdAt).toLocaleDateString('fr-FR')}}</td>
          <td>{{formation.diploma}}</td>
          <td>{{formation.techno.substring(0, 10)}}...</td>
          <td>
            <font-awesome-icon icon="fa-solid fa-eye" class="text-muted icon" />
            <router-link :to="{name: 'admin-formation-update', params: {id: formation.id}}">
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
import {useFormationAdminStore} from "@/stores/admin/formationAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const formationAdminStore = useFormationAdminStore()
const { formations } = storeToRefs(formationAdminStore)

onMounted(async () => {
  await formationAdminStore.getFormations()
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