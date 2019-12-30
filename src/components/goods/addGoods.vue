<template>
  <div class="add-goods">
    <el-form 
      ref="form" 
      :model="form" 
      :rules="rules" 
      label-width="100px" 
      class="add-form">
      <el-form-item prop="goodsName" label="商品名称：">
        <el-input v-model="form.goodsName" placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item prop="cate_id" label="商品分类：">
        <el-select v-model="form.cate_id" placeholder="请选择商品分类">
          <el-option 
            v-for="(cate, idx) in cateList"
            :key="idx"
            :label="cate.name"
            :value="cate.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品描述：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="商品图片：">
        <el-upload
          class="upload-demo"
          action="/api/profile"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          name="img"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <span slot="tip" class="el-upload__tip" style="margin-left: 20px;">只能上传jpg/png文件，且不超过500kb</span>
        </el-upload>
      </el-form-item>
      <el-form-item label="上下架：">
        <el-switch
          v-model="form.upload"
          active-text="上架"
          inactive-text="下架">
        </el-switch>
      </el-form-item>
      <el-form-item label="首页推荐：">
        <el-switch
          v-model="form.recommand"
          active-text="推荐"
          inactive-text="不推荐">
        </el-switch>
      </el-form-item>
      <hr>
      <el-form-item label="多规格：">
        <el-switch
          v-model="switchAttr"
          active-color="#13ce66"
          inactive-color="#999999">
        </el-switch>
      </el-form-item>
      <div class="single-attr" v-show="!switchAttr">
        <el-form-item label="价格：">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="库存：">
          <el-input v-model="form.stock"></el-input>
        </el-form-item>
      </div>
      <div class="more-attr" v-show="switchAttr">
        <el-form-item label="多规格：">
          <add-goods ref="moreAttr"></add-goods>
        </el-form-item>
      </div>
      <el-form-item label="商品详情：">
        <editor :value="form.detail" @input="getDetail"></editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
import addGoods from '@/components/goods/goodsAttr.vue';
import editor from '@/components/common/editor.vue';
export default {
  components: {
    addGoods, editor,
  },
  data() {
    return {
      form: {
        goodsName: '',
        cate_id: '',
        desc: '',
        imgUrl: '',
        price: '',
        stock: '',
        detail: '213213',
        upload: true,
        recommand: false
      },
      // 校验规则
      rules: {
        goodsName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        cate_id: [
          { required: true, message: '请选择商品分类', trigger: 'change' }
        ],
      },
      // 是否启用多规格，默认不启用
      switchAttr: false,
      fileList: [],
      // 测试商品分类
      cateList: [
        { id: 1, name: '汽车'},
        { id: 2, name: '数码'},
        { id: 3, name: '衣服'},
        { id: 4, name: '家电'}
      ]
    }
  },
  methods: {
    /* editorChange(val) {
      console.log(val)
    }, */
    handlePreview() {

    },
    handleRemove() {

    },
    getDetail(content) {
      console.log(content);
      this.form.detail = content;
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          let form = {};
          Object.keys(this.form).forEach(key => {
            form[key] = this.form[key];
          });
          form.attrList = this.$refs.moreAttr.tableData;
          console.log(form);
          console.log(JSON.stringify(form));
        } else {
          console.log('校验不通过');
          return false;
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .add-form {
    width: 1000px;
  }
</style>
<style lang="scss" scoped>
  .add-goods {
    overflow-y: auto;
    max-height: 780px;
  }
</style>
