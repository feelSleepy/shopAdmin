<template>
  <div class="my-table" v-loading="dataInfo.loading">
    <!-- 表格 -->
    <el-table style="width: 100%" :data="dataInfo.data">
      <slot name="table"></slot>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-show="dataInfo.data.length > 0"
      class="page-wrap"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="dataInfo.pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="dataInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataInfo.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    // 表格数据和分页数据
    dataInfo: {
      required: true,
      type: Object
    },
  },
  data() {
    return {

    }
  },
  methods: {
    // 切换一页显示的数量
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.$emit("sizeChange", val);
    },
    // 切换页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.$emit("pageChange", val);
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-table {
    box-sizing: border-box;
    margin: 10px 0;
    .page-wrap {
      margin-top: 10px;
      float: right;
    }
  }
</style>
<style lang="scss">
  .el-table__header-wrapper {
    thead tr th {
      background: #F5F7FA;
    }
  }
</style>