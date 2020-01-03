<template>
  <div class="side-bar">
    <div class="title" @click="isCollapse = !isCollapse">LOGO</div>
    <div class="content">
      <!-- 菜单 -->
      <el-menu 
        :default-active="$route.path" 
        class="el-menu-vertical-demo" 
        router
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <el-menu-item 
          v-for="(nav, idx) in navList" 
          :key="idx" 
          :index="nav.index">
          <i :class="nav.icon"></i>
          <span slot="title">{{nav.title}}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isCollapse'],
  data() {
    return {
      navList: [
        {
          title: '商品管理',
          index: '/goods/goodsList',
          icon: 'el-icon-s-goods',
          name: 'goods'
        },
        {
          title: '订单管理',
          index: '/order/orderList',
          icon: 'el-icon-s-order',
          name: 'order'
        },
        {
          title: '轮播管理',
          index: '/banner/bannerList',
          icon: 'el-icon-picture',
          name: 'banner'
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    console.log(this.$router);
  }
 }
</script>
<style lang="scss" scoped>
  .side-bar {
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    .title {
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
    .content {
      height: calc(100% - 51px);
      overflow-y: auto;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
    }
  }
</style>