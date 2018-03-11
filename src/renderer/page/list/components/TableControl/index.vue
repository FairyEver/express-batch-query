<template>
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
</template>

<script>
export default {
  data () {
    return {
      table: {
        tableData: [],
        border: true,
        size: 'mini'
      }
    }
  }
}
</script>

