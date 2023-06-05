<template>
  <div id="main">
    <!-- 顶部 -->
    <HomeTop></HomeTop>

    <!-- 中间倒计时 -->
    <HomeCountdown></HomeCountdown>

    <!-- 底部 -->
    <HomeBottom></HomeBottom>
  </div>
</template>
<script setup lang="ts">
import HomeTop from '@/components/home/HomeTop.vue'
import HomeCountdown from '@/components/home/HomeCountdown.vue'
import HomeBottom from '@/components/home/HomeBottom.vue'
</script>
<style scoped lang="scss">
#main {
  width: 800px;
}
</style>
