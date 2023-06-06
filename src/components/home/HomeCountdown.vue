<template>
  <div class="countdown-box">
    <div class="countdown-progress">
      <el-progress
        type="circle"
        width="230"
        stroke-width="5"
        :percentage="percentage"
        :indeterminate="true"
        :text-inside="false"
        color="#e35656"
        :show-text="false"
      ></el-progress>
      <!-- 倒计时 -->
      <div class="countdown-stopwatch">
        <HomeStopwatch :countdownTime="countdownTime" ref="homeStopwatchRef" @on-done="onDone" @on-change="onChange" />
      </div>
    </div>

    <!-- 结束任务 -->
    <el-button @click="cancelTask">点击打开 Message Box</el-button>
    <!-- 开始或者暂停 -->
    <span @click="startOrPause">start</span>
  </div>
</template>

<script setup lang="ts">
import HomeStopwatch from './HomeStopwatch.vue'
import { ElMessage, ElMessageBox } from 'element-plus/lib/components/index.js'
import { ref } from 'vue'
// TODO: 时间需要改为动态 用户设定
// 当前番茄钟设定的工作时间 单位分钟
let countdownTime = 1

// 秒表实例
const homeStopwatchRef = ref<InstanceType<typeof HomeStopwatch>>()

// 是否已计时
let isTimed = false
// 开始计时或者暂停
function startOrPause() {
  isTimed = !isTimed
  console.log('isTimed', isTimed)
  if (isTimed) {
    homeStopwatchRef.value?.start()
  } else {
    homeStopwatchRef.value?.pause()
  }
}

// 停止计时
// function stopTiming(isClear?: boolean) {
// 清除任务
// if (isClear) {
//   // 清空时间 从 0 开始
//   currentTime.value = 0
// }
homeStopwatchRef.value?.stop()
// }

// 秒表计时完成
function onDone() {
  // 修改状态
  isTimed = false

  // 进度条空
  percentage.value = 0

  // TODO：开启休息计时
  console.log('TODO：开启休息计时')
}

// 进度条百分比
let percentage = ref(100)
// 时间改变  计算进度条百分比
function onChange(secondsStep: number) {
  const targetStep = countdownTime * 10 // 总共要走多少秒
  // console.log('总共要走', targetStep)
  // console.log('当前走了', secondsStep)

  percentage.value = Math.fround(((targetStep - secondsStep) / targetStep) * 100)
  // console.log('当前比例', percentage.value)
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
  .countdown-progress {
    position: relative;
    .countdown-stopwatch {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      text-align: center;
    }
  }
}
</style>
