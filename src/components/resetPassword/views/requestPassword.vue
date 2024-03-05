<template>
  <BaseTemplate>
    <div class="bg-page w-100">
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="form-container">
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-2">
              <label for="email">Email</label>
              <input ref="email" type="email" name="username" id="username" required>
            </div>
            <button type="submit" class="sign">Enter Email</button>
          </form>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {ref} from "vue";
import {useUserStore} from "@/stores/UserStore";
import {useRouter} from "vue-router";

const email = ref(null)

const userStore = useUserStore()

const router = useRouter()

const onSubmit = async () => {
  await userStore.requestPassword(email.value.value)
  await router.push({name: 'experience'})
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
}

.form-container {
  width: 650px;
  padding: 10px;
  @include m.lg {
    margin: 0 10px;
    width: 100%;
  }
  .input-group {
    #username {
      border-radius: 3px;
    }
  }
}

.sign {
  font-size: 13px;
  width: 150px;
  padding: 8px;
  position: relative;
  left: 2px;
}
</style>