<template>
  <el-button-group>
    <el-button :disabled="disabled" @click="$emit('start')">开始</el-button>
    <el-button :disabled="disabled">暂停</el-button>
    <el-button :disabled="disabled">继续</el-button>
    <el-button :disabled="disabled">导出</el-button>
  </el-button-group>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
