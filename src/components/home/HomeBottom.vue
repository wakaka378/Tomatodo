<template>
  <div class="home-botton">
    <svg-icon class-name="list" icon-class="list" color="#909399" width="25" />
    <div class="home-botton-today">
      <span>ToDay</span>
      <span>{{ doneNum }}</span>
      /
      <span>{{ countNum }}</span>
    </div>
    <el-icon class="icon-button" size="25" color="#909399"><Setting /></el-icon>
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
  .home-botton-today {
    font-size: 24px;
    color: #606266;
    span {
      &:first-child {
        margin-right: 5px;
      }
    }
  }
}
</style>
