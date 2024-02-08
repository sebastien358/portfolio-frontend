<template>
  <div v-if="!isLoading" class="w-100">
    <div class="mx-2 h-100">
      <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div class="form-container">
          <p class="title">Expérience Create</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Year</label>
              <input v-model="editExperience.year" type="text" name="year" id="year" required>
            </div>
            <div class="input-group">
              <label for="password">Job</label>
              <input v-model="editExperience.job" type="text" name="job" id="job" required>
            </div>
            <div class="input-group">
              <label for="password">Subject</label>
              <input v-model="editExperience.subject" type="text" name="subject" id="subject" required>
            </div>
            <div class="input-group">
              <label for="password">Content</label>
              <textarea v-model="editExperience.content" name="content" id="content" required></textarea>
            </div>
            <div class="my-3">
              <label for="password">Images</label>
              <input @change="onClickInputFiles" ref="inputFiles" type="file" name="picture" class="ms-1 picture">
            </div>
            <button type="submit" class="sign">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useExperienceAdminStore} from "@/stores/admin/experienceAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const experienceAdminStore = useExperienceAdminStore()
const { editExperience } = storeToRefs(experienceAdminStore)

onMounted(async () => {
  await experienceAdminStore.initExperience()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await experienceAdminStore.experienceCreate(pictures.value)
}

const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.form-container {
  width: 550px;
  padding: 60px 20px 30px 20px;
  @include m.sm {
    width: 100%;
  }
}
</style>