<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
<style lang="scss">
html,
body {
  background-color: #f8f8f8 !important;
}
#app {
  width: 800px;
  border-radius: 5px;
  background-color: white;
  margin: 30px auto;
  padding: 10px;
  box-sizing: var(--el-box-shadow-dark);
}
.icon-button {
  height: 30px;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
}
</style>
