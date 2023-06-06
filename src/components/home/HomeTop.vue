<template>
  <div class="top-box">
    <div class="top-icon">
      <el-icon color="#67C23A"><CircleCheck /></el-icon>
    </div>
    <div class="top-task-input">
      <el-input v-model="taskTitle" />
    </div>
    <el-dropdown trigger="click" placement="bottom-end" @command="handleCommand">
      <div class="top-icon">
        <el-icon color="#c8c9cc" size="18"><DCaret /></el-icon>
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
  justify-content: space-between;
  height: 50px;
  padding: 15px;

  .top-icon {
    height: 28px;
    font-size: 28px;
    cursor: pointer;
    &:hover {
      .el-icon {
        opacity: 0.8;
      }
    }
  }

  .top-task-input {
    flex: 0.6;
    :deep input {
      font-size: 22px;
      text-align: center;
    }
    :deep .el-input {
      .el-input__wrapper {
        box-shadow: none;
      }
    }
  }
}
:deep .top-task-title {
  width: 150px;
  // &:hover {
  //   // background-color: #409eff;
  // }
}
</style>
