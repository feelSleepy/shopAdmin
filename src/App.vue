<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    
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
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
    width: 8px;
    height: 8px;
    background-color: #F5F5F5;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
    border-radius: 4px;
    background-color: #F5F5F5;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius: 4px;
    background-color: #999999;
}
</style>
