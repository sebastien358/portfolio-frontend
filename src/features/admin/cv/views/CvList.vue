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
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>
            <font-awesome-icon icon="fa-solid fa-eye" class="text-muted icon" />
            <router-link to="#">
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
</script>