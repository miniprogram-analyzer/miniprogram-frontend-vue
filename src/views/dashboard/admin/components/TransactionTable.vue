<template>
  <el-card class="box-card">
  <div>
    <el-popover placement="right" width="400" trigger="click">
      原因：这往往是index.js里面Page的P没有大写导致的，也有可能是app.json文件里面页面路径配置不对
      解决方法：1.检查一下index.js文件中Page里面的P是否大写了。2.检查一下app.json文件里面的路径配置
      <el-button type="text" slot="reference">报错类型：page is not defined </el-button>
    </el-popover>
  </div>
 </el-card>
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
  }
</style>
