<template>
  <BaseTemplate>
    <div class="bg-page w-100">
      <div v-if="!isLoading" class="d-flex align-items-center justify-content-center h-100">
        <div class="form-container">
          <p class="title">Login</p>
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-3">
              <label for="username">Username</label>
              <input v-model="editLogin.username" type="text" name="username" id="username" maxlength="255" required>
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input v-model="editLogin.password" type="password" name="password" id="password" minlength="8" maxlength="50" required>
              <div class="forgot">
                <router-link :to="{name: 'request-password'}" class="link">
                  Forgot Password ?
                </router-link>
              </div>
            </div>
            <button type="submit" class="sign">Signin</button>
          </form>
        </div>
      </div>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
import {useLoginStore} from "@/stores/loginStore";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const isLoading = ref(true)

const loginStore = useLoginStore()
const { editLogin } = storeToRefs(loginStore)

onMounted(async () => {
  await loginStore.initLogin()
  isLoading.value = false
})

const router = useRouter()

const onSubmit = async () => {
  await loginStore.login()
  await router.push({name: 'admin'})
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
  width: 100%;
  @include m.sm {
    padding: 0 20px;
  }
}

.sign {
  @include m.sm {
    font-size: 13px;
    padding: 8px;
  }
}

.input-group {
  .forgot a {
    @include m.sm {
      font-size: 12px;
    }
  }
}
</style>