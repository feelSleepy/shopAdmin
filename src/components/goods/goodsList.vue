<template>
  <div class="goods-list">
    <!-- 表单查询 -->
    <div class="form-wrap">
      <el-form :inline="true" :model="formInline" class="form-inline">
        <el-form-item label="商品名称">
          <el-input v-model="formInline.goodsName" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="formInline.cateId" clearable filterable placeholder="请输入商品分类">
            <el-option 
              v-for="(cate, idx) in cateList" 
              :key="idx"
              :label="cate.name" 
              :value="cate.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="form-right">
        <el-button type="primary" @click="operateGoods">新增</el-button>
      </div>
    </div>
    <!-- 表格 -->
    <myTable 
      :dataInfo="dataInfo"
      @pageChange="pageChange"
      @sizeChange="sizeChange">
      <template slot="table">
        <el-table-column
          label="商品名称"
          width="180"
          align="center"
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          label="商品图片"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="商品价格"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="商品库存"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="首页推荐"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="上下架"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="创建日期"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center">

        </el-table-column>
      </template>
    </myTable>
    <!-- 新增，编辑商品的表格 -->
    <el-dialog title="收货地址" :visible.sync="optGoods" width="1100px" top="20px" :destroy-on-close="true" :close-on-click-modal="false">
      <addGoods></addGoods>
    </el-dialog>
  </div>
</template>
<script>
import myTable from '@/components/common/myTable.vue';
import addGoods from '@/components/goods/addGoods.vue';

export default {
  data() {
    return {
      formInline: {
        cateId: '',
        goodsName: ''
      },
      // 表格数据
      dataInfo: {
        loading: false,
        total: 0,
        pageSize: 10,
        pageIndex: 1,
        data: []
      },
      // 添加，编辑商品的弹框
      optGoods: false,
      // 测试商品分类
      cateList: [
        {
          id: 'c_1',
          name: '男人',
        },
        {
          id: 'c_2',
          name: '女人',
        },
        {
          id: 'c_3',
          name: '汽车',
        },
        {
          id: 'c_4',
          name: '家电',
        }
      ]
    }
  },
  components: {
    myTable, addGoods
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    reset() {
      console.log('reset');
    },
    pageChange(val) {
      
    },
    sizeChange(val) {

    },
    operateGoods() {
      this.optGoods = true;
    }
  }
}
</script>
<style lang="scss" scoped>
  .goods-list {
    height: 100%;
    background: #ffffff;
    box-sizing: border-box;
    padding: 10px;
    .form-wrap {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      overflow: hidden;
      .form-inline {
        float: left;
      }
      .form-right {
        float: right;
      }
    }
  }
</style>