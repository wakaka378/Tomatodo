<template>
  <div class="home-botton">
    <el-button>list</el-button>
    <div>
      <span>ToDay</span>
      <span>{{ doneNum }}</span>
      /
      <span>{{ countNum }}</span>
    </div>

    <el-button>seting</el-button>
  </div>
</template>

<script setup lang="ts">
let doneNum = 0
let countNum = 0
</script>

<style scoped></style>
