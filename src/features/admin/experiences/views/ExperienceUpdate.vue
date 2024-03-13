<template>
  <div v-if="!isLoading" class="w-100 h-100">
    <div class="d-flex align-items-center flex-column justify-content-center mx-2 experience-update">
      <div class="d-flex justify-content-center align-items-center">
        <div class="form-container">
          <p class="title">Update Expérience</p>
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
              <input @change="onClickInputFiles" ref="inputFiles" type="file" class="ms-1 picture">
            </div>
            <button type="submit" class="sign">Send</button>
          </form>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-center container-pictures">
        <div v-for="picture in editExperience.pictures">
          <div class="d-flex flex-column align-items-center">
            <img :src="picture.url" class="pictures">
            <font-awesome-icon @click="onClickDeletePicture(picture.id)" class="icon-delete-picture" icon="fa-solid fa-trash" />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <button @click="onclickDelete" class="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useExperienceAdminStore} from "@/stores/admin/experienceAdminStore";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const experienceAdminStore = useExperienceAdminStore()
const { editExperience } = storeToRefs(experienceAdminStore)

const route = useRoute()

onMounted(async () => {
  await experienceAdminStore.initExperience()
  await experienceAdminStore.getCurrentExperience(route.params.id)
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await experienceAdminStore.updateExperience(route.params.id, pictures.value)
  await router.push({name: 'admin-experience-list'})
}

const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}

const onclickDelete = async () => {
  await experienceAdminStore.deleteExperience(route.params.id)
  await router.push({name: 'admin-experience-list'})
}

const onClickDeletePicture = async (id: number) => {
  await experienceAdminStore.deletePictureExperience(id)
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.experience-update {
  height: 100%;
  margin: 0 20px;
  @include m.sm {
    margin: 30px 20px;
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
  margin: 50px 0 50px 0;
  gap: 40px;
  @include m.sm {
    gap: 30px;
  }
  .pictures {
    height: 80px;
    @include m.sm {
      height: 45px;
      width: 100%;
    }
  }
  .icon-delete-picture {
    color: red;
    margin-top: 10px;
    cursor: pointer;
    @include m.sm {
      font-size: 11px;
    }
  }
}

.button {
  background-color: red;
  color: white;
  border: 0;
  outline: none;
  font-size: 13px;
  padding: 7px;
  border-radius: 3px;
  @include m.sm {
    padding: 6px;
    font-size: 12px;
  }
}
</style>