<template>
  <BaseTemplate>
    <div class="bg-page w-100">
      <div class="d-flex align-items-center justify-content-center mx-2 h-100">
        <div class="form-container">
          <form @submit.prevent="onSubmit" class="form">
            <div class="input-group mb-1">
              <label for="resetPassword mb-3">Enter password</label>
              <input ref="password" type="password" name="password" id="username" required>
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
import {useRouter} from "vue-router";

const password = ref(null)

const userStore = useUserStore()

const router = useRouter()

const onSubmit = async () => {
  await userStore.requestPassword(password.value.value)
  await router.push({name: 'login'})
}
</script>

<style scoped lang="scss">
.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
}

.form-container {
  width: 650px;
  padding: 10px;
  .input-group {
    #username {
      border-radius: 3px;
    }
  }
}

.sign {
  font-size: 13px;
  width: auto;
  padding: 8px 12px;
  position: relative;
  left: 2px;
}
</style>