<template>
  <el-container class="list-page">
    <el-aside width="200px">
      <el-button type="primary" icon="el-icon-document" style="width: 100%;">选择文件</el-button>
    </el-aside>
    <el-container>
      <el-header>
        <el-input v-model="url" placeholder="地址">
          <template slot="prepend">地址</template>
        </el-input>
      </el-header>
      <el-main>
        <el-table v-bind="table">
          <el-table-column prop="n" label="序号" width="80"></el-table-column>
          <el-table-column prop="id" label="订单单号" width="180"></el-table-column>
          <el-table-column prop="j-user" label="寄件人"></el-table-column>
          <el-table-column prop="j-address" label="寄件人地址"></el-table-column>
          <el-table-column prop="j-company" label="寄件人单位"></el-table-column>
          <el-table-column prop="s-user" label="收件人"></el-table-column>
          <el-table-column prop="s-phone" label="收件人电话"></el-table-column>
          <el-table-column prop="s-address" label="收件人地址"></el-table-column>
          <el-table-column prop="fahuoDate" label="发货时间"></el-table-column>
          <el-table-column prop="price" label="代收金额"></el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-button-group>
          <el-button>开始</el-button>
          <el-button>暂停</el-button>
          <el-button>继续</el-button>
          <el-button>导出</el-button>
        </el-button-group>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://q158724w01.iok.la/',
      table: {
        tableData: [],
        border: true,
        size: 'mini'
      }
    }
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

