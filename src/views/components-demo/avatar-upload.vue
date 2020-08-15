<template>
  <div class="components-container">
    <el-tabs type="card" tab-position="left">
      <el-tab-pane>
        <span slot="label"> 个人资料</span>
        <information />       
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label">消息提醒</span>
        <message />
      </el-tab-pane>

      <el-tab-pane>
        <span slot="label">我的收藏</span>
      </el-tab-pane>
      
      <el-tab-pane>
        <span slot="label">我的问答</span>
        <question />
      </el-tab-pane>
    
    </el-tabs>
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import information from './components/information'
import message from './components/message'
import question from './components/question'

export default {
  name: 'AvatarUploadDemo',
  components: { ImageCropper, PanThumb, information,message,question},
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    }
  },
}
</script>

<style scoped>
  .avatar{
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .inputclass{
    margin-bottom: 30px;
    margin-top: 10px;
    width: 500px;
  }
  
</style>
