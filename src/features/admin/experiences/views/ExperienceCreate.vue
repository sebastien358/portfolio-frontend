<template>
  <div v-if="!isLoading" class="w-100">
    <div class="h-100">
      <div class="d-flex justify-content-center align-items-center w-100 h-100">
        <div class="form-container">
          <p class="title">Expérience Create</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Year</label>
              <input v-model="editExperience.year" type="text" name="year" id="year" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">Job</label>
              <input v-model="editExperience.job" type="text" name="job" id="job" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">Subject</label>
              <input v-model="editExperience.subject" type="text" name="subject" id="subject" required>
            </div>
            <div class="input-group mb-3">
              <label for="password">Content</label>
              <textarea v-model="editExperience.content" name="content" id="content" required></textarea>
            </div>
            <div class="my-3">
              <label for="file" class="label-file">Images</label>
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
  await router.push({name: 'admin-experience-list'})
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