<template>
  <el-container>
    <el-main id="posts">
      <!-- 加载动画 -->
      <el-skeleton :rows="6" animated v-if="animate">
        <el-skeleton-item variant="text" style="width: 240px; height: 240px;" />
      </el-skeleton>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>文章标题</h2>
        </div>
        <div class="text item">
          <!-- 作者信息 -->
          <div class="userinfo">
            <img src="@/static/images/OIP-C.jpg" alt="头像" class="headPhoto">
            <div class="info">
              <div class="userAmount">
                <p class="name"><router-link to="/author/">码农小胡</router-link></p>
                <p class="amount">
                  <span class="el-icon-time">&nbsp;2021-12-26 20:20:00</span>
                  <span class="el-icon-view">&nbsp;1k</span>
                </p>
              </div>
              <el-button>关注+</el-button>
            </div>
          </div>
          <div class="subject">
            <h3>开篇</h3>
            <p>自我介绍一下，我是一名前端菜鸟，小胡。</p>
            <p>说起来，我会走上前端这条路，居然是因为当时电脑的配置不适合学安全。</p>
            <p>小胡于2020年6月22日初入前端领域，刚开始接触的时候吧，觉得这东西挺有意思的，但是学着学着就发现，还是挺有意思的。</p>
            <p>对于前端，至今仍保持一个热爱的态度。</p>
            <h3>历程</h3>
            <p>在学习前端的这一年多的时间里，我学到了很多，结实了很多同领域的朋友，有比我大的哥哥姐姐，有和我同龄的。</p>
            <p>起初，学习html+css的时候，是我的老师给了我学习的资源，后来听周围的人说要自己去找方向，所以也就是学完前端三剑客（html、css、JavaScript）之后，我开始自己寻找接下来要学习的方向。</p>
            <p>老师给的方向就是学习算法，学习canvas以及后端php、laravel等框架语言，但是我对于这些东西并不是很感兴趣，我自己也了解过，离开学校，步入社会之后，有些东西根本就用不到，于是我坚定自己的方向，偏离了老师给我安排的方向。</p>
            <p>这一年多的时间里，迷茫过、开心过、努力过，也有过放弃的念头，不过最后坚持下来的最终还是那一句：“我一个中职生，不学这个，出了学校之后去干什么？能干什么？”</p>
            <p>不过说起我的前端历程，其中少不了的就是我的学长和朋友对我的帮助，在我学校的工作室里，有这样一群学习前端的朋友，他们汇聚在一起，他们是一群有梦想的少年，每个人都想拥有一项技能，步入社会的时候至少不会沦落到一个很狼狈的地步吧。</p>
            <p>当然，今年也是我学前端以来最开心的一年，遇到了一群虽然每天会水群，但实力非凡的群友们，他们虽然时不时怼我，虽然没有面基过，但有时聊天的时候，也会很开心。</p>
            <p>有时看到他们带薪摸鱼的时候，我莫名的有些羡慕。</p>
            <h3>结尾</h3>
            <p>步入前端一年多，抛开别的不谈，我找到了坚持的方向，找到了目标，看到了自己的未来。</p>
            <p>2021即将成为过去式，迎来的将是崭新的2022。</p>
            <p>看到这篇文章的友友们，让我们2022年一起加油!!!</p>
          </div>
          <!-- 标签分类 -->
          <div class="tagClass">
            分类：<span class="tag bg_skyblue">前端</span><span class="tag bg_skyblue">vuejs</span>
          </div>
          <!-- 评论 -->
          <div class="remark">
            <h2>评论</h2>
            <!-- 用户评论区 -->
            <div class="user_remark">
              <img src="@/static/images/OIP-C.jpg" alt="用户头像" class="user_photo">
              <el-input v-model="user_remark" placeholder="请输入内容"></el-input>
              <el-button type="primary" @click="release">发布评论</el-button>
            </div>
            <!-- 评论区 -->
            <div class="comments_section">
              <el-card class="comment box-card" v-for="(item, index) in remark" :key="index">
                <p class="remarkName">
                  <img src="@/static/images/OIP-C.jpg" alt="" class="user_photo">
                  <router-link to="/author">{{item.name}}</router-link>
                  <span class="el-icon-time">&nbsp;{{item.time}}</span>
                </p>
                <p class="content" @click="observer">{{item.content}}</p>
                <el-button class="reply" type="text" v-show="replys" @click="reply">回复</el-button>
                <!-- 回复 -->
                <div v-if="item.reply != []">
                  <el-card class="comment box-card" v-for="(item1, index1) in item.reply" :key="index1">
                    <p class="remarkName">
                      <img src="@/static/images/OIP-C.jpg" alt="" class="user_photo">
                      <router-link to="/author">{{item1.responder}}</router-link>
                      <span>&nbsp;回复&nbsp;</span>
                      <router-link to="/author">{{item1.reviewers}}</router-link>
                      <span class="el-icon-time">&nbsp;{{item1.time}}</span>
                    </p>
                    <p class="content" @click="observer">{{item1.content}}</p>
                    <el-button class="reply" type="text" v-show="replys" @click="reply">回复</el-button>
                  </el-card>
                  <div class="replyInput" v-show="!replys">
                    <el-input v-model="replyInput" placeholder="请输入内容"></el-input>
                    <el-button type="primary">回复</el-button>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </el-card>
    </el-main>
    <Aside></Aside>
  </el-container>
</template>

<script>
import articleList from '@/plugins/articleList.json'
import remark from '@/plugins/remark.json'
import Aside from '@/views/Aside.vue'
export default {
  data() {
    return {
      animate: true,
      list: [],
      remark: [],
      user_remark: '',
      replyInput: '',
      replys: true
    }
  },
  created() {
    let state = JSON.parse(localStorage.getItem('state'))
    this.postsId = state.postsId
    this.list = articleList.articleList
    this.remark = remark.remark
    this.animate = true;
    console.log('加载动画执行中');
  },
  mounted() {
    this.animate = false;
    console.log(this.postsId);
    console.log('加载动画执行完毕');
  },
  methods: {
    posts() {
      console.log(this.postsId);
    },
    observer() {
      this.replys = true
    },
    reply() {
      this.replys = !this.replys
    },
    release() {
      if(this.user_remark != '' && this.user_remark.trim() != '') {
        console.log('123');
      }
    }
  },
  components: {
    Aside
  }
}
</script>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  margin-bottom: 40px;
  .info {
    margin-left: 10px;
    display: flex;
    .userAmount {
      height: 100%;
      margin-right: 20px;
      align-content: center;
      .name {
        margin-bottom: 15px;
      }
      .amount {
        font-size: 12px;
        .el-icon-time {
          margin-right: 10px;
        }
      }
    }
    .el-button {
      display: flex;
      padding: 10px 15px;
      margin: auto 0;
      font-size: 12px;
    }
  }
}
.subject {
  margin-bottom: 20px;
  p, h3, img {
    margin-bottom: 17px;
  }
  img {
    width: 100%;
  }
}
// 分类标签
.tagClass {
  margin-bottom: 30px;
  .tag {
    font-size: 12px;
    padding: 3px;
    margin-right: 10px;
    color: #fff;
    border-radius: 3px;
  }
}
// 评论
.remark {
  border-top: 1px solid #f1f1f1;
  h2 {
    margin: 20px 0;
  }
  .user_remark {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    .user_photo,.el-input,.el-button {
      margin-right: 20px;
    }
  }
  .comments_section {
    .user_photo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
      .comment {
        width: 100%;
        margin-top: 20px;
        .remarkName {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          .el-icon-time {
            font-size: 12px;
            margin-left: 15px;
          }
        }
        .content {
          text-indent: 1em;
          border: 1px solid #f1f1f1;
          border-radius: 5px;
          padding: 5px 0;
        }
        .reply {
          float: right;
        }
        .replyInput {
          display: flex;
          margin-top: 20px;
          .el-input {
            margin-right: 20px;
          }
        }
      }
  }
}
</style>