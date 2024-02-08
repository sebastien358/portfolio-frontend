<template>
  <div v-if="!isLoading" class="w-100">
    <div class="h-100 mx-2">
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="d-flex flex-column align-items-center p-5 profile">
          <router-link :to="{name: 'admin-user-edit', params: {id: user.id}}" class="link">
            Modifier mes données
          </router-link>
          <p class="m-0 pt-2">
            {{user.email}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const userAdminStore = useUserAdminStore()
const { user } = storeToRefs(userAdminStore)

onMounted(async () => {
  await userAdminStore.getMe()
  isLoading.value = false
})
</script>

<style scoped lang="scss">
.profile {
  padding: 30px;
  background-color: var(--background-card-light);
  font-size: 14px;
  color: white;
  .link {
    color: blueviolet;
    font-weight: 550;
    transition: 250ms ease;
    text-transform: uppercase;
  }
}
</style>