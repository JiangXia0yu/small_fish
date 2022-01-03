<template>
  <el-container>
    <el-main id="news">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="系统通知" name="systemInform">
            <div class="system e3e3e3" v-for="(item,index) in system" :key="index">
              <img src="@/assets/logo.png" alt="">
              <div class="info">
                <p class="content">{{item.content}}</p>
                <p class="time">{{item.time}}</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="评论通知" name="commentInform">
            <div class="comment e3e3e3" v-for="(item, index) in comment" :key="index">
              <img src="@/static/images/OIP-C.jpg" alt="">
              <div class="info">
                <p>
                  <router-link to="/user/1" class="name">
                    {{item.name}}
                  </router-link>
                   评论了你的文章 
                  <router-link to="/posts/1" class="skyblue">
                    {{item.title}}
                  </router-link>
                </p>
                <div class="content">
                  {{item.content}}
                </div>
                <p class="time">{{item.time}}</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="关注消息" name="concernInform">
            <div class="concern e3e3e3" v-for="(item, index) in concern" :key="index">
              <div class="concernChild">
                <img src="@/static/images/OIP-C.jpg" alt="">
                <div class="concernInfo">
                  <p><router-link to="/user/1" class="name">{{item.name}}</router-link></p>
                  <p class="time">{{item.time}}</p>
                </div>
              </div>
              <el-button type="success" v-if="item.type">√ 已关注</el-button>
              <el-button type="success" plain v-else>+ 关注</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'systemInform',
      concern: [
        {
          name: '码农小胡',
          time: '刚刚',
          type: true
        },
        {
          name: '菜鸟',
          time: '一天前',
          type: false
        },
        {
          name: '姜尘',
          time: '两天前',
          type: true
        },
        {
          name: '江小鱼',
          time: '半个月前',
          type: false
        },
        {
          name: '码农小胡',
          time: '刚刚',
          type: true
        },
        {
          name: '码农小胡',
          time: '刚刚',
          type: true
        },
      ],
      system: [
        {
          content: '【新用户必读】：恭喜您在本平台注册账号成功，本平台由码农小胡独家创作，感谢您的使用',
          time: '三天前'
        },
        {
          content: '【新用户必读】：恭喜您在本平台注册账号成功，本平台由码农小胡独家创作，感谢您的使用',
          time: '三天前'
        },
        {
          content: '【新用户必读】：恭喜您在本平台注册账号成功，本平台由码农小胡独家创作，感谢您的使用',
          time: '三天前'
        },
        {
          content: '【新用户必读】：恭喜您在本平台注册账号成功，本平台由码农小胡独家创作，感谢您的使用',
          time: '三天前'
        },
        {
          content: '【新用户必读】：恭喜您在本平台注册账号成功，本平台由码农小胡独家创作，感谢您的使用',
          time: '三天前'
        },
      ],
      comment: [
        {
          name: '码农小胡',
          title: '一个十七岁少年的前端历程',
          content: '加油!!!',
          time: '2天前'
        },
        {
          name: '码农小胡',
          title: '一个十七岁少年的前端历程',
          content: '加油!!!',
          time: '2天前'
        },
        {
          name: '码农小胡',
          title: '一个十七岁少年的前端历程',
          content: '加油!!!',
          time: '2天前'
        },
        {
          name: '码农小胡',
          title: '一个十七岁少年的前端历程',
          content: '加油!!!',
          time: '2天前'
        },
        {
          name: '码农小胡',
          title: '一个十七岁少年的前端历程',
          content: '加油!!!',
          time: '2天前'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  margin-right: 20px;
}
.time {
  font-size: 12px;
  color: #333;
  margin: 10px 0;
}
p {
  margin-top: 5px;
}
.name {
  color: #333;
}
::v-deep .el-card__body {
  padding-top: 0;
  .concern, .system, .comment {
    display: flex;
    margin-bottom: 20px;
    color: #333;
    border-radius: 5px;
    a:hover {
      color: #409EFF;
    }
  }
  .concern {
    align-items: center;
    height: 70px;
    .concernChild {
      display: flex;
      width: 88%;
      margin: auto 10px;
    }
    .el-button {
      height: 40px;
      width: 100px;
    }
  }
  .system {
    align-items: center;
  }
  .comment {
    .content {
      margin: 10px 0;
      padding: 5px;
      background-color: #fff;
      width: 500px;
      border-radius: 5px;
      text-indent: 1em;
    }
  }
}
</style>