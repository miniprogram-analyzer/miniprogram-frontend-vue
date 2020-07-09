<template>
  <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="报错类型：page is not defined" name="1">
    <div>原因：这往往是index.js里面Page的P没有大写导致的，也有可能是app.json文件里面页面路径配置不对</div>
    <div>解决方法：1.检查一下index.js文件中Page里面的P是否大写了。2.检查一下app.json文件里面的路径配置</div>
    <div>后果：页面无法正常显示，一片空白</div>
    <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
  </el-collapse-item>
  <el-collapse-item title="给云函数安装依赖时怎么都不能成功" name="2">
    <div>解决方法：直接部署，不用安装，不会造成其他不良后果</div>
  </el-collapse-item>
  <el-collapse-item title="改动原来代码后onLoad函数出错" name="3">
    <div>原因1：对函数内部的嵌套函数不清楚（多去编写代码这个问题会被解决)</div>
    <div>原因2：onLoad函数没有删全，只删了上半部分，下半部分没有删掉</div>
  </el-collapse-item>
  <el-collapse-item title="怎么改margin创造的边框的颜色" name="4">
    <div>这是错误的认识,margin不创造边框，边框用border。</div>
  </el-collapse-item>
  <el-collapse-item title="数据库不显示上传的内容" name="5">
    <div>解决方案：1.尝试刷新2.注意：集合名里面的内容和代码里面的要一致</div>
  </el-collapse-item>
  <el-collapse-item title="已经显示正确的结果，但云函数那块（queey函数）还是有报错" name="6">
    <div>解决方案：1.每次做修改后重新部署  2.仔细检查一下queey函数的内容是否正确（包含使用的逗号等）</div>
  </el-collapse-item>
  <el-collapse-item title="什么时候用双引号什么时候用单引号？" name="7">
    <div>都可以！</div>
  </el-collapse-item>
  <el-collapse-item title="js里注释是不能用<!--**-->但能用//吗" name="8">
    <div>用于 HTML；css 用 /**/；js /**/    //都可以；json文件没有注释</div>
  </el-collapse-item>
  <el-collapse-item title=" xx定义为' '    那' '代表了啥吗" name="9">
    <div>其代表空字符串</div>
  </el-collapse-item>
  <el-collapse-item title="（wxml中）图片显示不出来，音频放不出来" name="10">
    <div>原因：1.图片（音频）的名称里面混有中文字符（包含中文逗号等），2.是在代码中图片（音频）的路径不对3.图片命名里可能有空格</div>
    <div>解决方案：1.检查一下图片（音频）的名称里面是否有中文字符，如果有，对图片（音频）文件重命名。2.检查一下代码里面所写的程序路径是否正确。3.想一下之前有没有改过文件路径，改过的话，在小程序里面也要改哟。4.注意这些路径里面的空格，可能会很坑！</div>
  </el-collapse-item>
  <el-collapse-item title="如何重返上一步操作？回退？" name="11">
    <div>ctrl+z</div>
  </el-collapse-item>
  <el-collapse-item title="search云函数调用了数据库操作的api，为什么不直接在函数里调用api" name="12">
    <div>这是可以的</div>
  </el-collapse-item>
  <el-collapse-item title="查找图片时往上翻文件夹是.. \，往下翻用什么？" name="13">
    <div>是../作为上翻，往下翻用文件名就OK</div>
  </el-collapse-item>
  <el-collapse-item title="既然app,json文件可以配置小程序页面，那么它和index相关文件又有什么从属关系呢" name="14">
    <div>index相关文件优先，app.json作为备用，有相同的配置项以page.json为准</div>
  </el-collapse-item>
  <el-collapse-item title="text和view是等效的吗" name="15">
    <div>不是的，view有独占一行效果</div>
  </el-collapse-item>
  <el-collapse-item title="如何用绝对路径来使用名为xx的图片？" name="16">
    <div>先上倒到page页，然后在指向xx，再调用图片</div>
  </el-collapse-item>
  <el-collapse-item title="为什么会提示'a'未定义呢（error：‘a’ is no defined）" name="17">
    <div>原因：1.在js文件中很可能是在没有定义变量a的情况下就使用了变量a。比如：Var b ，len   len=a+b </div>
    <div>解决方案：1.在js文件中尝试将a定义出来。2.可以试试在wxml文件中对变量a进行数据绑定。3.注意一下有没有与a相关的变量名打错了</div>
  </el-collapse-item>
  <el-collapse-item title="云函数的回调结果不是预期的结果" name="18">
    <div>原因：有可能是在更改云函数代码后，没有重新部署</div>
    <div>解决方案：重新部署云函数</div>
  </el-collapse-item>
  <el-collapse-item title="为何在数据比较时出现报错？" name="19">
    <div>原因：1.数据绑定的方式不对，2.也有可能在比较时错误的用到了”=”</div>
    <div>解决方案：1.按照这样的形式进行数据绑定："{{xxx}}".2.试着检查一下是否出现了原因2中的情况，比较中有“=”号的地方替换为“==”号。</div>
  </el-collapse-item>
  <el-collapse-item title="请问读取时为何出错（提交正常，云数据库有正常显示）" name="20">
    <div>原因：</div>
    <div>1.有可能是将setData写成了诸如setData1，setData 2 这些不是自定义东西。（note: setData是原生语法）</div>
    <div>2.函数内部嵌套时不能用this，如果这么做，会出现报错（this.setData is not a function; at api cloud. callFunction success callback function）</div>
    <div>解决方案：1.检查是否出现类似于将setData写成setData1的情况。2.定义一个that来代替this的职责（note: var that=this）</div>
  </el-collapse-item>
  <el-collapse-item title="如何调整按钮大小" name="21">
    <div>利用wxss中的属性</div>
  </el-collapse-item>
  <el-collapse-item title="为何点击按钮后没有反应？" name="22">
    <div>原因：可能是js中与按钮反应相关的变量拼写错误</div>
    <div>解决方案：检查js文件中与wxml文件中变量的拼写是否正确</div>
  </el-collapse-item>
  <el-collapse-item title="没有报错，但是没有结果输出" name="23">
    <div>原因：很可能是wxml里没有绑定输出的结果</div>
    <div>解决方案：试试在wxml文件中添加相关输出的数据绑定</div>
  </el-collapse-item>
  <el-collapse-item title="调字体大小用什么属性啊，是font-size吗" name="24">
    <div>是的是的</div>
  </el-collapse-item>
  <el-collapse-item title="想要让图片只在一个区间内显示，该怎么编写if语句呢" name="25">
    <div>考虑一下利用else if语句</div>
  </el-collapse-item>
  <el-collapse-item title="云开发控制台打不开了" name="26">
    <div>解决方案：重启微信开发者工具</div>
  </el-collapse-item>
  <el-collapse-item title="为什么没有显示出正确的样式？" name="27">
    <div>原因：1.wxml文件中class里面的内容书写不正确 2.wxss中样式设定得不对</div>
    <div>解决方法：1.仔细检查class中书写的内容 2.试试看一下wxss中设定的样式是否正确。</div>
  </el-collapse-item>
  <el-collapse-item title="页面为何消失了" name="28">
    <div>原因：1.很可能是js文件中的Page没有了（如果是这样，控制栏（console）会出现这样的提示：Page "pages/index/index" has not been registered yet. ）2.程序中出现了一些语法错误</div>
    <div>解决方案：1.给js文件加上Page，2.如果是第二种情况，试试修改程序中出现的语法错误</div>
  </el-collapse-item>
  <el-collapse-item title="如何修改云函数中的环境名？" name="29">
    <div>改不了，试试新建一个环境</div>
  </el-collapse-item>
  <el-collapse-item title="请问js里那个冒号（正确的标点）是怎么打出来的，我打出来是红色的" name="30">
    <div>原因：这是中文的冒号（标点）</div>
    <div>解决方案：按shift将中文输入切换成英文，再输入冒号即可</div>
  </el-collapse-item>
  <el-collapse-item title="让一个变量除2取余，如果得0是一张图片（一个结果），得1是另一张图片（另一种结果），要怎么写if和else语句" name="31">
    <div>假如这个变量是a，a%2即可。0为False，1为True，False时显示一张图片，True时显示另外一张图片</div>
  </el-collapse-item>
  <el-collapse-item title="读取数据库中数据时没有报错，但是就是读取不出来" name="32">
    <div>原因：在云函数中读取函数中写的数据库名与js中读取函数中写的数据库名字不一样。（本人出现过这样的情况）</div>
    <div>解决方案：试试检查一下云函数中的数据库名与js中读取函数的数据库名是否一致，很有可能出现了这种情况。</div>
  </el-collapse-item>
  <el-collapse-item title="如何获取字符串的长度？" name="33">
    <div>试试str.length，如果是回调的数据，试试e.detail.value.str,length(note: str对应已经定义的字符串的名字)</div>
  </el-collapse-item>
  <el-collapse-item title="运行的时候不报错，一输数字就报错了" name="34">
    <div>原因：1.没有向js文件传递参数。（如果是这样，会出现报错：e is not defined; at pages/index/index page xx function）2.也有可能是定义的参数与传递时的参数不一致（如果是这样，会出现报错：xx变量 is not defined; at pages/index/index page xx function）</div>
    <div>解决方案：试试在函数的（）中填入e作为参数</div>
  </el-collapse-item>
</el-collapse>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'http://a1.qpic.cn/psc?/V10D37VW2VtVgx/f*DO5817LGdZi.ytwQ3quacgRwT795ELxCbTsPP*EX3Kq1j9HkDo1GSwO4FQmodKaTMQlsQe.AKpPRF1tGg*0g!!/c&ek=1&kp=1&pt=0&bo=VQhABlUIQAYRMAc!&tl=1&vuin=1356790894&tm=1594209600&sce=60-2-2&rf=0-0'
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

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
