<template>
  <div v-if="type === 'success'" class="alert alert-success" role="alert">
    {{message}}
  </div>
  <div v-if="type === 'error'" class="alert alert-danger" role="alert">
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
  @include m.sm {
    font-size: 13px;
    padding: 10px 0;
  }
}
</style>