<template>
  <div class="wrap">
    <sideBar class="left-wrap" :isCollapse="isCollapse"></sideBar>
    <div class="right-wrap">
      <div class="top-title">
        <i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="isCollapse = !isCollapse"></i>
      </div>
      <div class="main-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from "@/components/sideBar";
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  components: {
    sideBar
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
  .wrap {
    height: 100%;
    display: flex;
    .left-wrap {
      height: 100%;
    }
    .right-wrap {
      width: calc(100% - 200px);
      height: 100%;
      flex: 1;
      .top-title {
        height: 50px;
        padding: 0 10px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        i {
          font-size: 24px;
          cursor: pointer;
          &:hover {
            color: #1989fa;
          }
        }
      }
      .main-wrap {
        height: calc(100% - 51px);
        overflow-y: auto;
        background: #F0F2F5;
        box-sizing: border-box;
        padding: 15px;
      }
    }
  }
</style>
<style lang="scss">
  .wrap .el-menu {
    border-right: 0;
  }
</style>