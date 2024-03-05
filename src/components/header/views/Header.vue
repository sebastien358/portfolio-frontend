<template>
  <header class="px-3 px-lg-4 px-xl-4 px-xxl-5 d-flex align-items-center flex-row justify-content-between z-1 position-fixed">
    <nav class="d-none d-lg-block">
      <ul class="list-inline m-0 d-flex align-items-center menu-desktop">
        <li class="me-4">
          <router-link :to="{name: 'experience'}" class="link">
            Expérience
          </router-link>
        </li>
        <li class="me-4">
          <router-link :to="{name: 'projects'}" class="link">
            Projets
          </router-link>
        </li>
        <li class="me-4">
          <router-link :to="{name: 'techno'}" class="link">
            Technologies
          </router-link>
        </li>
        <li class="me-4">
          <router-link :to="{name: 'formation'}" class="link">
            Formation
          </router-link>
         </li>
        <li v-if="userAdminStore.isLogged()">
          <router-link :to="{name: 'admin'}" class="link">
            Administration
          </router-link>
        </li>
      </ul>
    </nav>

    <nav class="d-none d-lg-block">
      <ul class="list-inline m-0 p-0 d-flex align-items-center menu-desktop">
        <li class="me-3 icon">
          <router-link :to="{name: 'cv'}" class="link">
            CV
          </router-link>
        </li>
        <li class="me-3">
          <a href="https://www.linkedin.com/in/s%C3%A9bastien-petit-1874141b9">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
          </a>
        </li>
        <li class="me-3">
          <a href="https://github.com/sebastien358">
            <font-awesome-icon icon="fa-brands fa-github" class="icon" />
          </a>
        </li>
        <li v-if="!userAdminStore.isLogged()">
          <router-link :to="{name: 'login'}">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" class="text-success icon" />
          </router-link>
        </li>
        <li v-else>
          <router-link to="#">
            <font-awesome-icon @click="onClickDisconnect" icon="fa-solid fa-right-from-bracket" class="text-danger icon" />
          </router-link>
        </li>
      </ul>
    </nav>

    <nav class="d-block d-lg-none">
      <font-awesome-icon @click="state.open = !state.open" icon="fa-solid fa-bars" class="icon-mobile" />
      <Transition>
        <ul v-if="state.open" class="list-inline m-0 d-flex flex-column menu-mobile">
          <li class="mb-2">
            <router-link :to="{name: 'experience'}" class="link">
              Expérience
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="{name: 'projects'}" class="link">
              Projets
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="{name: 'techno'}" class="link">
              Technologies
            </router-link>
          </li>
          <li class="mb-2">
            <router-link :to="{name: 'formation'}" class="link">
              Formation
            </router-link>
          </li>
          <li class="mb-2 icon">
            <router-link :to="{name: 'cv'}" class="link">
              CV
            </router-link>
          </li>
          <li class="mb-2">
            <a href="https://www.linkedin.com/in/s%C3%A9bastien-petit-1874141b9">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" class="icon" />
            </a>
          </li>
          <li class="mb-2">
            <a href="https://github.com/sebastien358">
              <font-awesome-icon icon="fa-brands fa-github" class="icon" />
            </a>
          </li>
        </ul>
      </Transition>
    </nav>

    <nav class="d-block d-lg-none">
      <ul class="list-inline m-0 p-0">
        <li v-if="!userAdminStore.isLogged()">
          <router-link :to="{name: 'login'}">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket" class="text-success icon-login" />
          </router-link>
        </li>
        <li v-else>
          <router-link to="#">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-danger icon-logout" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useUserAdminStore} from "@/stores/admin/userAdminStore";
import {useRouter} from "vue-router";
import Calc from "@/components/calc/Calc.vue";

const state = reactive<{
  open: boolean
}>({
  open: false
})

const userAdminStore = useUserAdminStore()

const router = useRouter()

const onClickDisconnect = () => {
  userAdminStore.logout()
  router.push({name: 'login'})
}
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

header {
  position: relative;
  background-color: var(--background-headband-dark);
  color: white;
  width: 100%;
  height: 60px;
  .menu-desktop {
    li {
      cursor: pointer;
      font-size: 22px;
      color: var(--color-light);
      transition: all 250ms ease;
      &:hover {
        color: var(--color-dark);
      }
    }
    .link {
      text-decoration: none;
      cursor: pointer;
      font-size: 22px;
      color: var(--color-light);
      transition: all 250ms ease;
      @include m.xxl {
        font-size: 19px;
      }
      @include m.xl {
        font-size: 19px;
      }
      @include m.lg {
        font-size: 18px;
      }
      &:hover {
        color: var(--color-dark);
      }
    }
  }
}

.icon {
  font-size: 24px;
  color: var(--color-light);
  @include m.xl {
    font-size: 22px;
  }
  &:hover {
    color: var(--color-dark);
  }
}

.icon-mobile {
  cursor: pointer;
  font-size: 27px;
  color: var(--color-light);
}

.icon-login {
  font-size: 24px;
  color: green;
  @include m.lg {
    font-size: 27px;
  }
}

.icon-logout {
  font-size: 24px;
  @include m.lg {
    font-size: 27px;
  }
}

// menu mobile

.menu-mobile {
  position: absolute;
  padding: 20px 60px 20px 15px;
  top: 60px;
  background-color: var(--background-headband-dark);
  left: 0;
  .link {
    text-decoration: none;
    cursor: pointer;
    font-size: 22px;
    color: var(--color-light);
    transition: all 250ms ease;
    font-weight: 200;
    @include m.lg {
      font-size: 19px;
    }
    @include m.sm {
      font-size: 18px;
    }
    &:hover {
      color: var(--color-dark);
    }
  }
}

/* we will explain what these classes do next! */

.v-enter-active,
.v-leave-active {
  transition: all 700ms ease-in-out;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

</style>
