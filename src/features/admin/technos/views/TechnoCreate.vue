<template>
  <div v-if="!isLoading" class="w-100">
    <div class="d-flex align-items-center justify-content-center h-100">
      <form @submit.prevent="onSubmit">
        <div class="d-flex flex-column">
          <input @change="onClickInputFiles" ref="inputFiles" type="file" required>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useTechnoAdminStore} from "@/stores/admin/technoAdminStore";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const inputFiles = ref(null)
const pictures = ref([])

const technoAdminStore = useTechnoAdminStore()

onMounted(async () => {
  await technoAdminStore.initTechno()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await technoAdminStore.technoCreate(pictures.value)
  await router.push({name: 'admin-techno-list'})
}



const onClickInputFiles = () => {
  pictures.value = inputFiles.value.files
}
</script>

<style scoped lang="scss">
input[type=file] {
  width: 350px;
  max-width: 100%;
  color: #222245;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #222245;
}

input[type=file]:focus {
  outline: 2px dashed #222245;
  outline-offset: 2px;
}

input[type=file]::file-selector-button {
  margin-right: 8px;
  border: none;
  background: #222245;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
}

input[type=file]::file-selector-button:hover {
  background: #4747b8;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #1e1e3f;
    color: #fff;
  }

  input[type=file] {
    color: #fff;
    border: 1px solid #35356e;
    background-color: #1e1e3f;
  }

  input[type=file]:focus {
    outline: 2px dashed #7c7cc0;
    outline-offset: 2px;
  }

  input[type=file]::file-selector-button {
    background: #35356e;
    color: #fff;
  }
}

button {
  background-color: #a29bfe;
  color: white;
  border: 0;
  outline: none;
  font-size: 13px;
  padding: 8px;
  border-radius: 3px;
  margin-top: 5px;
}
</style>