<template>
  <div v-if="type === 'success'" class="alert" role="alert" :class="{success: type}">
    {{message}}
  </div>
  <div v-if="type === 'error'" class="alert" role="alert" :class="{error: type}">
    {{message}}
  </div>
</template>

<script setup lang="ts">
import {useMessageStore} from "@/stores/messageStore";
import {storeToRefs} from "pinia";

const messageStore = useMessageStore()
const { message, type } = storeToRefs(messageStore)

message ? setTimeout(() => {
  messageStore.intMessage()
}, 2000) : null
</script>

<style scoped lang="scss">
@use '@/assets/css/mixins' as m;

.alert {
  margin: 0;
  border-radius: 0;
  text-align: center;
  font-size: 15px;
  color: white;
  @include m.sm {
    font-size: 12px;
    padding: 10px 0;
  }
}

.success {
  background-color: green;
}

.error {
  background-color: red;
}
</style>