<template>
  <div class="countdown-box">
    <div>
      <el-progress
        type="circle"
        :percentage="100"
        :text-inside="false"
        :status="countdownStatus"
        :show-text="false"
        color="red"
      ></el-progress>
    </div>

    <!-- time -->
    <div>
      <span>40</span>
      :
      <span>00</span>
    </div>

    <!-- 结束任务 -->
    <el-button type="text" @click="cancelTask">点击打开 Message Box</el-button>
    <!-- 开始或者暂停 -->
    <span @click="clickCountdown">start</span>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus/lib/components/index.js'
import { ref } from 'vue'
// 倒计时状态
enum CountdownStatus {
  success = 'success',
  exception = 'exception',
}
let countdownStatus = {
  success: CountdownStatus.success,
  exception: CountdownStatus.exception,
}
ref(countdownStatus)

// 倒计时进度
// let percentage = ref(100)
// 通过 currentTime 计算进度
// function getPercentageByCurrentTime(currentTime: number): void {
//   percentage.value = targetTime / currentTime
// }

// TODO: 时间需要改为动态 用户设定
// 当前番茄钟设定的工作时间 单位分钟
let workTime = 48
// 每个番茄钟之间的休息时间
// let restTime = 5

// 计时器当前时间
let currentTime = ref(0)
// 需要达到的时间 单位毫秒
let targetTime = workTime * 60 * 1000
// 计时器的定时器
let countdownTimer: number

// 开始计时
function startTiming() {
  countdownTimer = setInterval(() => {
    currentTime.value++

    // 到达设定时间  关闭计时器
    if (currentTime.value === targetTime) {
      // TODO： 将任务状态设置为 成功  自动开启休息 休息倒计时
      countdownStatus.success = CountdownStatus.success
    }
  }, 1000)
}

// 停止计时
function stopTiming(isClear?: boolean) {
  clearInterval(countdownTimer)
  // 清除任务
  if (isClear) {
    // 清空时间 从 0 开始
    currentTime.value = 0
  }
}
// 计时器是否开始
const isStart = ref(false)

// 点击事件
function clickCountdown(): void {
  isStart.value = !isStart.value

  // 如果 isStart 为 true  开始计时 否则暂停
  isStart.value ? startTiming() : stopTiming()
}

// 取消任务
function cancelTask() {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
<style scoped lang="scss">
.countdown-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  padding: 10px 0px;
}
</style>
