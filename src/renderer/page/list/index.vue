<template>
  <el-container class="list-page">
    <el-aside width="200px">
      <NumbersControl></NumbersControl>
    </el-aside>
    <el-container>
      <el-header>
        <UrlControl></UrlControl>
      </el-header>
      <el-main>
        <TableControl></TableControl>
      </el-main>
      <el-footer>
        <OperationControl></OperationControl>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  components: {
    NumbersControl: () => import('./components/NumbersControl'),
    UrlControl: () => import('./components/UrlControl'),
    TableControl: () => import('./components/TableControl'),
    OperationControl: () => import('./components/OperationControl')
  }
}
</script>

<style>
.list-page {
  height: 100%;
}
.list-page .el-aside {
  border-right: 1px solid #DCDFE6;
  padding: 10px;
}
.list-page .el-header,
.list-page .el-footer {
  padding: 10px;
}
.list-page .el-main {
  padding: 0px 10px;
  overflow: auto;
}
</style>

