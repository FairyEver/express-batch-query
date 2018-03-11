<template>
  <div>
    <el-upload :before-upload="handleUpload" action="default">
      <el-button
        type="primary"
        icon="el-icon-document"
        style="width: 100%;">
        选择文件
      </el-button>
    </el-upload>
    <ul class="ids">
      <li v-for="(item, index) in ids" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ids: []
    }
  },
  methods: {
    handleUpload (file) {
      this.$import.xlsx(file)
        .then(({header, results}) => {
          this.$message({
            showClose: true,
            message: `读取到${results.length}条数据`,
            type: 'success'
          })
          this.ids = results.map(e => e.id)
        })
      return false
    }
  }
}
</script>
