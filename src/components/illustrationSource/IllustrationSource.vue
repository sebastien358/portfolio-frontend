<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="pixabay">
        <h3 class="text-white mb-3">Photos :</h3>
        <p class="text-white m-0">• Photo fond, MacBook : Image libre de droit <span>Pixabay</span></p>
        <p class="text-white m-0">• Photo, Escalier : Image libre de droit <span>Pixabay</span></p>
        <p class="text-white m-0">• Photo, Oops : Image libre de droit <span>Pixabay</span></p>
      </div>

      <ul class="list-inline text-white">
        <h3 class="mb-3">Logos :</h3>
        <li>
          • <span>Studi</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>HTML5</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Bootstrap</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>CSS3</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Sass</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>JavaScript</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>VueJS</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>TypeScript</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Pinia</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>MySQL</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>SQL</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>PHP</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Symfony</span> Public domain, via Wikimedia Commons
        </li>
        <li>
          • <span>Superprof</span> Public domain, via Wikimedia Commons
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
  height: 100%;
  padding: 60px 40px;
  @include m.mac {
    padding: 50px 20px;
  }
  @include m.lg {
    padding: 40px 20px;
  }
  @include m.sm {
    padding: 40px 20px;
  }
}

.pixabay {
  margin-bottom: 40px;
  @include m.mac {
    margin-bottom: 30px;
  }
  @include m.sm {
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    padding-bottom: 12px;
    @include m.mac {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 13px;
      padding-bottom: 8px;
    }
  }
}

p {
  font-size: 18px;
  @include m.sm {
    font-size: 13px;
  }
}

h3 {
  font-size: 22px;
  @include m.mac {
    font-size: 20px;
  }
  @include m.sm {
    font-size: 19px;
  }
}

span {
  color: var(--background-card-light);
}

ul {
  h3 {
    font-size: 22px;
    @include m.mac {
      font-size: 20px;
    }
    @include m.sm {
      font-size: 19px;
    }
  }
  li {
    font-size: 18px;
    margin-bottom: 15px;
    @include m.mac {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 13px;
      margin-bottom: 8px;
    }
    span {
      color: var(--background-card-light);
    }
  }
}
</style>