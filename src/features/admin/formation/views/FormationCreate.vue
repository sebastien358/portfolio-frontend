<template>
  <div v-if="!isLoading" class="w-100 h-100">
    <div class="d-flex justify-content-center align-items-center w-100 formation-create">
      <div class="form-container">
        <p class="title">Formation Create</p>
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
            <input @change="onClickInputFiles" ref="inputFiles" type="file" name="picture" class="ms-1 picture" multiple>
          </div>
          <button type="submit" class="sign">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useFormationAdminStore} from "@/stores/admin/formationAdminStore";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const formationAdminStore = useFormationAdminStore()
const { editFormation } = storeToRefs(formationAdminStore)

onMounted(async () => {
  await formationAdminStore.initFormation()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await formationAdminStore.createFormation(pictures.value)
  await router.push({name: 'admin-formation-list'})
}

const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.formation-create {
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