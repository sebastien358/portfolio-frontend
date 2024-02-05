<template>
  <header class="px-3 px-lg-5 d-flex align-items-center flex-row justify-content-between z-1 position-fixed">
    <nav class="d-none d-lg-block">
      <ul class="list-inline m-0 d-flex align-items-center menu-desktop">
        <li class="me-4">
          <router-link :to="{name: 'experience'}" class="link">
            Expérience
          </router-link>
        </li>
        <li class="me-4">Projets</li>
        <li class="me-4">Technologies</li>
        <li>
          <router-link :to="{name: 'formation'}" class="link">
            Formation
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
        <li>
          <a href="https://github.com/sebastien358">
            <font-awesome-icon icon="fa-brands fa-github" class="icon" />
          </a>
        </li>
      </ul>
    </nav>

    <nav class="d-block d-lg-none">
      <font-awesome-icon icon="fa-solid fa-bars" class="icon-mobile" />
      <ul class="list-inline m-0 d-flex align-items-center menu-mobile">
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
header {
  background-color: var(--background-headband-dark);
  color: white;
  max-width: var(--width-page);
  width: 100%;
  height: 60px;
  .menu-desktop {
    li {
      cursor: pointer;
      font-size: 22px;
      color: var(--color-light);
      transition: all 250ms ease;
      text-decoration: none;
      &:hover {
        color: var(--color-dark);
      }
    }
    .link {
      cursor: pointer;
      font-size: 22px;
      color: var(--color-light);
      transition: all 250ms ease;
      text-decoration: none;
      &:hover {
        color: var(--color-dark);
      }
    }
  }
}

.icon {
  font-size: 24px;
  color: var(--color-light);
  //transition: all 250ms ease;
  &:hover {
    color: var(--color-dark);
  }
}

.icon-mobile {
  font-size: 27px;
  color: var(--color-light);
}

a.router-link-active {
  text-decoration: underline;
}
</style>
