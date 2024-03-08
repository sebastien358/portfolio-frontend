<template>
  <div v-if="open" class="nav-admin z-1">
    <nav>
      <ul class="list-inline">
        <h3>Profile</h3>
        <li>
          <router-link :to="{name: 'admin-profile'}" class="link">
            Modifier mes données
          </router-link>
        </li>
      </ul>

      <ul class="list-inline">
        <h3>Expériences</h3>
        <li>
          <router-link :to="{name: 'admin-experience-list'}" class="link">
            Mes expériences
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin-experience-create'}" class="link">
            Ajouter expérience
          </router-link>
        </li>
      </ul>

      <ul class="list-inline">
        <h3>Projets</h3>
        <li>
          <router-link :to="{name: 'admin-project-list'}" class="link">
            Mes projets
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin-project-create'}" class="link">
            Ajouter un projet
          </router-link>
        </li>
      </ul>

      <ul class="list-inline">
        <h3>Technologies</h3>
        <li>
          <router-link :to="{name: 'admin-techno-list'}" class="link">
            Mes technos
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin-techno-create'}" class="link">
            Ajouter une techno
          </router-link>
        </li>
      </ul>

      <ul class="list-inline">
        <h3>Formations</h3>
        <li>
          <router-link :to="{name: 'admin-formation-list'}" class="link">
            Les formations
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin-formation-create'}" class="link">
            Ajouter une formation
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean
}>()
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.nav-admin {
  background-color: rgba(255, 255, 255, 0.20);
  min-width: 200px;
  padding: 25px 15px;
  height: 100%;
  @include m.lg {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.40);
    height: initial;
    top: 60px;
  }
  @include m.lg {
    background-color: rgba(0, 0, 0, 0.40);
    min-width: 170px;
    top: 60px;
  }
}

nav {
  ul {
    margin-bottom: 35px;
    @include m.sm {
      margin-bottom: 25px;
    }
    h3 {
      color:#dfe6e9;
      font-size: 18px;
      @include m.sm {
        font-size: 14px;
      }
    }
    li {
      color: white;
      font-size: 14px;
      margin-bottom: 10px;
      @include m.sm {
        margin-bottom: 2px;
      }
    }
    .link {
      color:#dfe6e9;
      font-size: 14px;
      text-decoration: none;
      @include m.sm {
        font-size: 11px;
      }
    }
  }
}

.router-link-exact-active {
  color: white !important;
  text-decoration: underline !important;
}
</style>