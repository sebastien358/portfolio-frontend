<template>
  <div class="nav-admin">
    <nav class="mb-4">
      <ul class="list-inline">
        <h3>Profile</h3>
        <li>
          <router-link :to="{name: 'admin-profile'}" class="link">
            Modifier mes données
          </router-link>
        </li>
      </ul>
    </nav>

    <nav>
      <ul class="list-inline">
        <h3>Expériences</h3>
        <li>
          Mes expériences
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.nav-admin {
  background-color: rgba(255, 255, 255, 0.20);

  min-width: 230px;
  padding: 25px 15px;
  @include m.lg {
    position: fixed;
    top: 60px;
  }
  ul {
    h3 {
      color: white;
      font-size: 16px;
    }
    li {
      color: white;
      font-size: 13px;
    }
    .link {
      color: white;
      font-size: 13px;
    }
  }
}
</style>