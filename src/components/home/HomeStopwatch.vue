<template>
  <div class="stopwatch">
    <span>{{ formatTime(minutes) }}</span>
    ：
    <span>{{ formatTime(seconds) }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  countdownTime: number // 倒计时时间 单位分钟
}>()

let minutes = ref(props.countdownTime)
let seconds = ref(10)
// 格式化时间 当时间为一位数时加上 0
function formatTime(time: number): number | string {
  console.log('time', time)
  if (!time && time !== 0) {
    return time
  }
  let str = time.toString()
  console.log('str.length ', str.length)
  return str.length > 1 ? str : (str = '0' + str)
}
let secondsStep = 0
// 定时器
let countdownTimer: number
function start() {
  countdownTimer = setInterval(() => {
    seconds.value--

    secondsStep++
    emit('on-change', secondsStep)
    if (seconds.value === 0) {
      seconds.value = 10
      minutes.value--
    }
    if (minutes.value === 0) {
      stop()
    }
  }, 1000)
}

const emit = defineEmits<{
  (e: 'on-done'): void
  (e: 'on-change', secondsStep: number): void // 单位秒
}>()

// 结束
function stop() {
  pause()

  minutes.value = 0
  seconds.value = 0
  secondsStep = 0

  // 抛出 Done
  emit('on-done')
}

// 暂停
function pause() {
  clearInterval(countdownTimer)
}

// 暴露方法
defineExpose({
  start,
  stop,
  pause,
})
</script>

<style scoped></style>
