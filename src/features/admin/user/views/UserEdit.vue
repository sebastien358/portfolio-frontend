<template>
  <div v-if="!isLoading" class="w-100">
    <div class="h-100 mx-2">
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="form-container">
          <p class="title">update data</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Username</label>
              <input v-model="editUser.email" type="text" name="username" id="username" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">New password</label>
              <input v-model="editUser.newPassword" type="password" name="password" id="password" required>
            </div>
            <button type="submit" class="sign">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";

const isLoading = ref(true)

const userAdminStore = useUserAdminStore()
const { editUser } = storeToRefs(userAdminStore)

const route = useRoute()

onMounted(async () => {
  await userAdminStore.initUser()
  await userAdminStore.getCurrentUser(route.params.id)
  isLoading.value = false
})

const onSubmit = async () => {
  await userAdminStore.userUpdate(route.params.id)
}
</script>