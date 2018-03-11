<template>
  <el-container class="list-page">
    <el-aside width="200px">
      <!-- 单号 -->
      <IdsControl v-model="ids"></IdsControl>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 地址 -->
        <UrlControl></UrlControl>
      </el-header>
      <el-main>
        <!-- 表格显示 -->
        <TableControl></TableControl>
      </el-main>
      <el-footer>
        <!-- 用户控制 -->
        <OperationControl
          :disabled="ids.length === 0"
          @start="handleStart">
        </OperationControl>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  components: {
    IdsControl: () => import('./components/IdsControl'),
    UrlControl: () => import('./components/UrlControl'),
    TableControl: () => import('./components/TableControl'),
    OperationControl: () => import('./components/OperationControl')
  },
  data () {
    return {
      ids: []
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    search (id) {
      axios.get('https://www.easy-mock.com/mock/5aa4a745d2fb8103717472c0/zt/search').then(res => {
        console.log(res)
      })
    },
    // 开始搜索
    handleStart () {
      console.log('开始搜索')
    }
  }
}
</script>

<style>
.list-page {
  height: 100%;
}
.list-page .el-upload {
  display: block;
}
.list-page .ids {
  padding: 0px;
  margin: 10px -10px 0px -10px;
}
.list-page .ids li {
  font-size: 12px;
  list-style: none;
  padding: 5px 10px;
  cursor: pointer;
}
.list-page .ids li:hover {
  background-color: #EBEEF5;
}
.list-page .el-aside {
  border-right: 1px solid #DCDFE6;
  padding: 10px;
}
.list-page .el-header {
  padding: 10px;
}
.list-page .el-footer {
  border-top: 1px solid #DCDFE6;
  padding: 10px;
}
.list-page .el-main {
  padding: 0px 10px 10px 10px;
  overflow: auto;
}
</style>

