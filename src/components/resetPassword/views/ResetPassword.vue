<template>
  <BaseTemplate>
    <div class="bg-page w-100">
      <div class="d-flex align-items-center justify-content-center mx-2 h-100">
        <div class="form-container">
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-1">
              <label for="resetPassword mb-3">Enter password</label>
              <input ref="password" type="password" name="password" id="password" required>
            </div>
            <div class="input-group">
              <label for="resetPassword mb-3">Confirmation</label>
              <input ref="confirm" type="password" name="password" id="confirm" required>
            </div>
            <button type="submit" class="sign">Reset password</button>
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
import {useRoute, useRouter} from "vue-router";

const password = ref(null)
const confirm = ref(null)

const userStore = useUserStore()

const route = useRoute()
const router = useRouter()

const onSubmit = async () => {
  if (password.value.value !== confirm.value.value) {
    console.log('Les mot de passe ne correspondent pas')
    return
  }
  await userStore.resetPassword(password.value.value, confirm.value.value, route.params.token)
  await router.push({name: 'login'})
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
  padding: 10px 10px 20px 10px;
  @include m.md {
    margin: 0 10px;
    width: 100%;
  }
}

.input-group {
  #username {
    border-radius: 3px;
  }
  input {
    font-size: 15px;
    @include m.sm {
      font-size: 14px;
    }
  }
}

.sign {
  font-size: 13px;
  width: auto;
  padding: 8px 25px;
  position: relative;
  left: 2px;
  top: 5px;
}
</style>