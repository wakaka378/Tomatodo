<template>
  <div class="home-botton">
    <el-icon><MoreFilled /></el-icon>

    <div>
      <span>ToDay</span>
      <span>{{ doneNum }}</span>
      /
      <span>{{ countNum }}</span>
    </div>
    <el-icon><Setting /></el-icon>
  </div>
</template>

<script setup lang="ts">
let doneNum = 0
let countNum = 0
</script>

<style scoped lang="scss">
.home-botton {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
</style>
