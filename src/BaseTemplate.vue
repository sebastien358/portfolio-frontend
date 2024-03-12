<template>
  <div class="app-container">
    <Header class="header" />
    <div v-if="message !== null" class="message">
      <Alert />
    </div>
    <div class="components">
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/views/Header.vue";
import Footer from "@/components/footer/views/Footer.vue";
import {useMessageStore} from "@/stores/messageStore";
import {storeToRefs} from "pinia";
import Alert from "@/components/alert/views/Alert.vue";

const messageStore = useMessageStore()
const { message } = storeToRefs(messageStore)
</script>

<style scoped lang="scss">
.base-template {
  background-color: var(--plain-page);
  min-height: 100dvh;
  width: 100%;
}

.app-container {
  display: grid;
  grid-template-areas: 'header' 'components' 'footer';
  grid-template-rows: 60px 1fr 50px;
  height: 100vh;
}

.header {
  grid-area: header;
}

.components {
  background: var(--background-body);
  grid-area: components;
}

.footer {
  grid-area: footer;
}

.message {
  position: relative;
  top: 60px;
  width: 100%;
}
</style>