/* 
  商品多规格
 */
<template>
  <div class="wrap">
    <!-- 规格选择部分 -->
    <div class="spec-wrap">
      <el-button size="mini" @click="addSpec">添加规格</el-button>
      <el-button size="mini" @click="getData">生成</el-button>
      <!-- 自定义多规格列表 -->
      <div class="spec-list">
        <div class="spec-item"
          v-if="specList.length > 0"
          v-for="(obj, idx) in specList"
          :key="idx">
          <div class="spec-unit">
            <span class="label">规格名</span>
            <input type="text" v-model="obj.specName">
            <el-button size="mini" type="danger" class="del-icon" @click="delSpecValue(idx, specList)">删除规格</el-button>
          </div>
          <div class="spec-unit">
            <span class="label">规格值</span>
            <div style="margin-left:90px">
              <div class="val-wrap"
                v-for="(item, key) in obj.specVal"
                :key="key">
                <input type="text" v-model="obj.specVal[key]">
                <i class="el-icon-error" @click="delSpecValue(key, obj.specVal)"></i>
              </div>
              <el-button type="primary" size="mini" @click="addSpecValue(obj, $event)">添加</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="table-wrap">
        <el-table
          :data="tableData"
          v-show="tableData && tableData.length > 0"
          size="mini"
          border
          max-height="400">
          <el-table-column
            align="center"
            v-for="(item, idx) in tableElementList"
            :key="idx"
            :prop="item"
            :label="item">
          </el-table-column>
          <el-table-column
            align="center"
            width="140"
            v-for="(item, idx) in otherAttr"
            :key="idx+item"
            :label="item.label">
            <template slot-scope="scope">
              <el-input v-model="scope.row[item.key]" size="mini"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 多规格模板
      specTemp: {
        specName: '',
        specVal: ['']
      },
      // 多规格上限
      maxSpec: 3,
      // 多规格列表
      specList: [],
      // 其他属性
      otherAttr: [
        { key: 'price', label: '价格' }, 
        { key: 'stock', label: '库存' }
      ],
      // 生成的表格数据
      tableData: [],
      // 动态生成的表格元素
      tableElementList: []
    }
  },
  methods: {
    // 添加一个自定义规格
    addSpec() {
      if(this.specList.length === 3) return;
      this.specList.push(JSON.parse(JSON.stringify(this.specTemp)));
    },
    // 新增一个规格值输入框
    addSpecValue(item, evt) {
      item.specVal.push('');
      this.$nextTick(() => {
        // 最后一个input框获取焦点
        let inputWrpList = evt.currentTarget.parentNode.querySelectorAll('.val-wrap'),
          len = inputWrpList.length;
        inputWrpList[len - 1].querySelector('input').focus();
      });
    },
    // 删除一个多规格值--> 根据索引删除
    delSpecValue(index, arr) {
      arr.splice(index, 1);
    },
    getData() {
      // 处理成笛卡尔积的入参
      let list = this.specList.map(item => item.specVal.map(unit => {
        let obj = {};
        obj[item.specName] = unit;
        return obj
      }));
      // 处理成ele表格需要的格式
      let res = this.cartesian(list).map(item => {
        let resItem = {};
        item.forEach(obj => {
          // 由于键名不固定，因此通过for...in来循环出键名和键值
          for(let key in obj) {
            resItem[key] = obj[key];
          }
        });
        // 生成表格的键
        this.tableElementList = Object.keys(resItem);
        // 加入其他的属性
        this.otherAttr.forEach(unit => {
          resItem[unit.key] = '';
        });
        return resItem;
      });
      this.tableData = res;
      console.log(res);
    },
    // 整合方法
    cartesian(arr) {
      if (arr.length < 2) return arr[0] || [];
      return [].reduce.call(arr, function (col, set) {
        let res = [];
        col.forEach(c => {
          set.forEach(s => {
            let t = [].concat(Array.isArray(c) ? c : [c]);
            t.push(s);
            res.push(t);
          })
        });
        return res;
      });
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    text-align: left;
    .spec-list {
      .spec-unit {
        // display: flex;
        margin-top: 10px;
        .label {
          display: block;
          width: 80px;
          letter-spacing: 2px;
          text-align: right;
          margin-right: 10px;
          float: left;
        }
        .val-wrap {
          position: relative;
          display: inline-block;
          margin-right: 10px;
          i {
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            display: none;
          }
          &:hover i {
            display: block;
          }
        }
        input {
          outline: none;
          border: 1px solid #ccc;
          height: 22px;
          line-height: 20px;
          padding: 0 5px;
          border-radius: 4px;
        }
        .del-icon {
          margin-left: 10px;
        }
      }
    }
    .table-wrap {
      width: 800px;
      margin-top: 10px;
    }
  }
</style>