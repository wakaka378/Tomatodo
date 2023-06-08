<template>
  <div class="dblclick-span-box">
    <span @dblclick="onDblclick">{{ modelValue }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

function onDblclick(e: MouseEvent) {
  const element = e.target as HTMLElement
  // 获取要编辑的文本内容
  var oldHtml = element.innerHTML

  // 创建一个新的 input 输入框
  var newInput = document.createElement('input')

  // 为新的 input添加属性
  newInput.type = 'text'
  newInput.value = oldHtml

  // 清空当前元素的文本内容
  element.innerHTML = ''

  // 把新的 input 框 追加到当前元素节点中
  element.appendChild(newInput)

  // 设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
  newInput.setSelectionRange(0, oldHtml.length)

  // 为新 input 框获取焦点
  newInput.focus()

  // 为新的 input 添加失去焦点事件
  newInput.onblur = function () {
    // 判断失去焦点时，input 框的值是否与原值相同，相同则表示没有修改，返回原值；不同则表示有改动，返回新值
    element.innerHTML = newInput.value == oldHtml ? oldHtml : newInput.value
  }
}
</script>

<style scoped lang="scss">
.dblclick-span-box {
  flex: 0.6;
  text-align: center;
  height: 30px;
  line-height: 36px;
  span {
    display: inline-block;
    width: 80%;
    font-size: 24px;
  }
  :deep input {
    text-align: center;
    height: 30px;
    width: inherit;
  }
}
</style>
