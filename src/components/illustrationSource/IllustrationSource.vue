<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="mb-4 mb-lg-5">
        <h3 class="text-white mb-3">Photos :</h3>
        <p class="text-white">Photo fond, bannière : Image libre de droit <span>Pixabay</span></p>
      </div>

      <ul class="list-inline text-white">
        <h3 class="mb-4">Logos :</h3>
        <li>
          • <span>Studi</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>HTML5</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>CSS3</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>PHP</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>JavaScript</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>MySQL</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>SQL</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Bootstrap</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>VueJS</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Pinia</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Sass</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Symfony</span> Public domain, via Wikimedia Commons
        </li>
      </ul>
    </div>
  </BaseTemplate>
</template>

<script setup lang="ts">
import BaseTemplate from "@/BaseTemplate.vue";
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.bg-page {
  background: var(--bg-page);
  height: calc(100vh - 110px);
  padding: 80px 40px;
  @include m.sm {
    padding: 50px 20px;
  }
}

p {
  font-size: 19px;
  @include m.sm {
    font-size: 14px;
  }
}

h3 {
  font-size: 23px;
  @include m.sm {
    font-size: 20px;
  }
}

span {
  color: var(--background-card-light);
}

ul {
  h3 {
    font-size: 23px;
    @include m.sm {
      font-size: 20px;
    }
  }
  li {
    font-size: 19px;
    margin-bottom: 15px;
    @include m.sm {
      font-size: 14px;
    }
    span {
      color: var(--background-card-light);
    }
  }
}
</style>