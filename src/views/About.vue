<template>
  <el-container>
    <el-main id="about" >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>关于本站</span>
          <el-button 
          class="el-icon-s-promotion icon" 
          style="float: right; padding: 3px 0" 
          type="text"></el-button>
          <el-button 
          class="el-icon-link icon" 
          style="float: right; padding: 3px 0" 
          type="text"
          @click="copyLink"></el-button>
          <el-button 
          class="el-icon-location icon " 
          style="float: right; padding: 3px 0" 
          type="text"
          @click="place"></el-button>
        </div>
        <div class="text item">
          <h3>本站简介</h3>
          <p>本站由<b>"码农小胡"</b>与<b>"向兄"</b>独家冠名</p>
          <p>前端所用技术栈: <b>vuejs</b>/<b>element-ui</b></p>
          <p>后端所用技术栈: <b>php</b>/<b>MySQL</b>/<b>MySQL</b></p>
          <p>本站主要用于发布文章等, 与普通博客网址无区别</p><br>
          <h3>联系作者</h3>
          <p>Q: 3038574849</p>
          <p>V: h20220221</p>
          <p>Github: <a href="https://github.com/jiangxia0yu">JiangChen</a></p>
          <p>Gitee: <a href="https://gitee.com/jiangxia0yu">江小鱼</a></p><br>
          <h3>打赏作者</h3>
          <p><img src="../static/images/wxzf.jpg" alt=""></p><br>
          <p><img src="../static/images/zfbzf.jpg" alt=""></p><br>
          <h3>寄语</h3>
          <p>不负韶华 砥砺前行</p>
          <p>每个人生来就是自己的主角</p>
          <p>认清目标 勇往直前</p>
          <p>代码是人间清醒</p>
          <p>所有光鲜亮丽的背后总是一步一个脚印走出来的</p>
          <p>啥也别想 老老实实当个码农</p>
        </div>
      </el-card>
    </el-main>
    <Aside></Aside>
  </el-container>
</template>

<script>
import Aside from '@/views/Aside.vue'
export default {
  beforeDestroy() {
    let active = document.querySelectorAll('.menus')[3];
    active.style.backgroundColor = ''
  },
  methods: {
    copyLink() {
      console.log('place');
    },
    place() {
      console.log('place');
    }
  },
  components: {
    Aside
  }
}
</script>

<style lang="scss" scoped>
.icon {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 18px;
}
img {
  width: 200px;
}
</style>