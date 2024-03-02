<template>
  <div v-if="!isLoading" class="w-100">
    <div class="d-flex align-items-center justify-content-center h-100">
        <div class="d-flex flex-wrap justify-content-center mt-5 container-picture">
          <div v-for="picture in editTechno.pictures">
            <img :src="picture.url">
          </div>
        </div>
      <button @click="onClickDelete" type="button" class="button">Supprimer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useTechnoAdminStore} from "@/stores/admin/technoAdminStore";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const isLoading = ref(true)

const technoAdminStore = useTechnoAdminStore()
const { editTechno } = storeToRefs(technoAdminStore)

const route = useRoute()

onMounted(async () => {
  await technoAdminStore.getCurrentTechno(route.params.id)
  isLoading.value = false
})

const onClickDelete = async () => {
  await technoAdminStore.deleteTechno()
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

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


.container-picture {
  img {
    width: 170px;
    height: 170px;
    transition: all 1s ease;
    margin: 10px 15px;
    &:hover {
      transform: scale(1.5);
    }
    @include m.sm {
      width: 140px;
      height: 140px;
    }
  }
}
</style>