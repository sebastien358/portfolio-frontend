<template>
  <BaseTemplate>
    <div class="bg-page">
      <div class="mb-4 mb-lg-4 mb-xl-5">
        <h3 class="text-white mb-3">Photo :</h3>
        <p class="text-white">Photo fond, bannière : Image libre de droit <span>Pixabay</span></p>
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
  padding: 80px 40px;
  @include m.mac {
    padding: 50px 20px;
  }
  @include m.sm {
    padding: 50px 20px;
  }
}

p {
  font-size: 19px;
  @include m.sm {
    font-size: 13px;
  }
}

h3 {
  font-size: 23px;
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
    font-size: 23px;
    @include m.mac {
      font-size: 20px;
    }
    @include m.sm {
      font-size: 19px;
    }
  }
  li {
    font-size: 19px;
    margin-bottom: 15px;
    @include m.mac {
      font-size: 16px;
    }
    @include m.sm {
      font-size: 13px;
      margin-bottom: 12px;
    }
    span {
      color: var(--background-card-light);
    }
  }
}
</style>