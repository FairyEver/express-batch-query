<template>
  <el-input v-model="url" placeholder="地址">
    <template slot="prepend">地址</template>
  </el-input>
</template>

<script>
export default {
  data () {
    return {
      url: 'Hello'
    }
  }
}
</script>

