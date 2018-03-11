<template>
  <div>
    <el-upload :before-upload="handleUpload" action="default">
      <el-button type="primary" icon="el-icon-document" style="width: 100%;">选择文件</el-button>
    </el-upload>
    <ul>
      <li>12312312</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleUpload (file) {
      this.$import.xlsx(file)
        .then(({header, results}) => {
          console.log(header)
          console.log(results)
        })
      return false
    }
  }
}
</script>
