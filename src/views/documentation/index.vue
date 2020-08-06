<template>

  <div class="app-container documentation-container">
    
     <a class="document-btn" target="_blank" href="https://oursparkspace.cn">火花空间</a>
     <a class="document-btn" target="_blank" href="https://pan.baidu.com/s/1CliU4XgtqFQ6YhLkUHDQyA">菜鸟教程</a>
     <a class="document-btn" target="_blank" href="https://www.w3school.com.cn/index.html">w3school</a>
     <a class="document-btn" target="_blank" href="https://developer.mozilla.org/zh-CN/">MND</a>
     <a class="document-btn" target="_blank" href="https://developers.weixin.qq.com/miniprogram/dev/framework/">微信小程序</a>
     
     <!--
    <el-row class="tac">
      <el-col span="6">
        <el-menu
          :default-active="$route.path"
          :router="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index='1'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜鸟教程</span>
            </template>
            <el-menu-item index="/list">
              第一节
            </el-menu-item>
          </el-submenu>
          <el-submenu index='2'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>w3school</span>
            </template>
          </el-submenu>
          <el-submenu index='3'>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>MDN</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    -->
  </div>
  
</template>


<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import axios from 'axios'
export default {
  name: 'Documentation',
  components: { DropdownMenu },
  
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
