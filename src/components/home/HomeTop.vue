<template>
  <div class="top-box">
    <div class="icon-button">
      <el-icon color="#67C23A" size="34"><CircleCheck /></el-icon>
    </div>
    <dblclickSpan2Input v-model="taskTitle"></dblclickSpan2Input>
    <el-dropdown trigger="click" placement="bottom-end" @command="handleCommand">
      <div class="icon-button">
        <el-icon color="#909399" size="20"><DCaret /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, index) in 10" :key="index" :command="item">
            <el-text class="top-task-title" truncated>{{ item }}Self element set width 100px</el-text>
          </el-dropdown-item>
          <el-dropdown-item command="addTask" divided>添加任务</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import dblclickSpan2Input from '@/components/dblclickSpan2Input/Index.vue'
import { ref } from 'vue'
const taskTitle = ref('task 1')

function handleCommand(command: string | number | object) {
  console.log('command: string | number | object', command)
}
</script>

<style scoped lang="scss">
.top-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 10px;
}
.top-task-title {
  width: 200px;
  // &:hover {
  //   // background-color: #409eff;
  // }
}
</style>
