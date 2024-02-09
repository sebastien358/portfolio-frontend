<template>
  <div class="nav-admin">
    <nav>
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
    </nav>

    <nav>
      <ul class="list-inline">
        <h3>Projets</h3>
        <li>
          <router-link to="#" class="link">
            Mes projets
          </router-link>
        </li>
        <li>
          <router-link to="#" class="link">
            Ajouter un projet
          </router-link>
        </li>
      </ul>
    </nav>

    <nav>
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
    </nav>

    <nav>
      <ul class="list-inline">
        <h3>Formations</h3>
        <li>
          <router-link to="#" class="link">
            Les formations
          </router-link>
        </li>
        <li>
          <router-link to="#" class="link">
            Ajouter une formation
          </router-link>
        </li>
      </ul>
    </nav>

    <nav>
      <ul class="list-inline">
        <h3>Curriculum vitæ</h3>
        <li>
          <router-link :to="{name: 'admin-cv-list'}" class="link">
            CV
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'admin-cv-create'}" class="link">
            Ajouter CV
          </router-link>
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
  min-width: 200px;
  padding: 25px 15px;
  @include m.lg {
    position: fixed;
    top: 60px;
  }
}

nav {
  margin-bottom: 35px;
  ul {
    h3 {
      color:#dfe6e9;
      font-size: 18px;
    }
    li {
      color: white;
      font-size: 13px;
      margin-bottom: 10px;
    }
    .link {
      color:#dfe6e9;
      font-size: 13px;
    }
  }
}
</style>