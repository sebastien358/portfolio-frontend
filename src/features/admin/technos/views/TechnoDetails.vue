<template>
  <div v-if="!isLoading" class="w-100">

    <div class="d-flex flex-wrap justify-content-center container-picture">
      <div class="d-flex flex-column align-items-center">
        <div v-for="picture in editTechno.pictures">
          <img :src="picture.url">
        </div>
        <button @click="onClickDelete" type="button" class="button">Delete</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useTechnoAdminStore} from "@/stores/admin/technoAdminStore";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const technoAdminStore = useTechnoAdminStore()
const { editTechno } = storeToRefs(technoAdminStore)

const route = useRoute()

onMounted(async () => {
  await technoAdminStore.getCurrentTechno(route.params.id)
  isLoading.value = false
})

const router = useRouter()

const onClickDelete = async () => {
  await technoAdminStore.deleteTechno()
  await router.push({name: 'admin-techno-list'})
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.container-picture {
  padding: 90px 20px 30px 20px;
  img {
    width: 170px;
    height: 170px;
    transition: all 1s ease;
    margin: 10px 15px;
    &:hover {
      transform: scale(1.5);
    }
    @include m.sm {
      width: 120px;
      height: 120px;
    }
  }
}

button {
  background-color: red;
  color: white;
  border: 0;
  outline: none;
  font-size: 13px;
  padding: 7px;
  border-radius: 3px;
  margin-top: 10px;
  @include m.sm {
    padding: 6px;
    font-size: 12px;
  }
}
</style>