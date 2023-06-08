<template>
  <!-- <svg :class="svgClass" class="svg-default" :style="{ width, height: width, cursor: 'pointer' }"> -->
  <svg
    :class="svgClass"
    class="svg-default"
    :width="width"
    :height="width"
    preserveAspectRatio="none meet"
    cursor="pointer"
  >
    <use class="svgClassUse" :xlink:href="iconName" :stroke="color" :color="color" width="100%" height="100%" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '#333',
  },
  width: {
    type: String,
    default: '20',
  },
})

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<style lang="scss" scoped>
.svg-default {
  opacity: 0.8;

  &:hover {
    opacity: 1;

    color: antiquewhite;
  }
}
</style>
