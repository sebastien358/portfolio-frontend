<template>
  <div v-if="!isLoading" class="w-100 h-100">
    <div class="d-flex justify-content-center flex-column align-items-center formation-update">
      <div class="d-flex justify-content-center align-items-center w-100">
        <div class="form-container">
          <p class="title">Formation Update</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Year</label>
              <input v-model="editFormation.year" type="text" name="year" id="year" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">Diploma</label>
              <input v-model="editFormation.diploma" type="text" name="diploma" id="diploma" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">Job</label>
              <input v-model="editFormation.job" type="text" name="job" id="job" required>
            </div>
            <div class="input-group mb-2">
              <label for="password">Techno</label>
              <textarea v-model="editFormation.techno" required></textarea>
            </div>
            <div class="my-3">
              <label for="file" class="label-file">Images</label>
              <input @change="onChangeInputFiles" ref="inputFiles" type="file" name="picture" class="ms-1 picture" multiple>
            </div>
            <button type="submit" class="sign">Send</button>
          </form>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-center container-pictures">
        <div v-for="picture in editFormation.pictures">
          <div class="d-flex flex-column align-items-center">
            <img :src="picture.url" class="pictures">
            <font-awesome-icon @click="onClickDeletePicture(picture.id)" icon="fa-solid fa-trash" class="icon-delete-picture" />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mb-3">
        <button @click="onClickDelete" class="button-delete-pictures">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useFormationAdminStore} from "@/stores/admin/formationAdminStore";
import {storeToRefs} from "pinia";
import {useRoute, useRouter} from "vue-router";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const formationAdminStore = useFormationAdminStore()
const { editFormation } = storeToRefs(formationAdminStore)

const route = useRoute()

onMounted(async () => {
  await formationAdminStore.initFormation()
  await formationAdminStore.getCurrentFormation(route.params.id)
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await formationAdminStore.updateFormation(route.params.id, pictures.value)
  await router.push({name: 'admin-formation-list'})
}

const onChangeInputFiles = () => {
  pictures.value = inputFiles.value.files
}

const onClickDelete = async () => {
  await formationAdminStore.deleteFormation(route.params.id)
  await router.push({name: 'admin-formation-list'})
}

const onClickDeletePicture = async (id: number) => {
  await formationAdminStore.deletePictureFormation(id)
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.formation-update {
  height: 100%;
  @include m.sm {
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

.container-pictures {
  gap: 35px;
  margin: 50px 10px;
  @include m.sm {
    margin: 40px 10px;
  }
  .pictures {
    height: 80px;
    @include m.sm {
      height: 40px;
      width: 100%;
    }
  }
  .icon-delete-picture {
    cursor: pointer;
    margin-top: 15px;
    color: #d63031;
  }
}

.button-delete-pictures {
  background: red;
  padding: 8px;
  font-size: 14px;
  color: white;
  border: 0;
}
</style>