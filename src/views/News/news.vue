<template>
  <el-container>
    <el-main id="news">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="系统通知" name="systemInform">
            
          </el-tab-pane>
          <el-tab-pane label="评论通知" name="commentInform">
            评论通知
          </el-tab-pane>
          <el-tab-pane label="关注消息" name="concernInform">
            <div class="concern e3e3e3" v-for="(item, index) in concern" :key="index">
              <div class="concernChild">
                <img src="@/static/images/OIP-C.jpg" alt="">
                <div class="concernInfo">
                  <p><router-link to="/user/1">{{item.name}}</router-link></p>
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
      activeName: 'concernInform',
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
::v-deep .el-card__body {
  padding-top: 0;
  .concern {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    margin: 10px 5px;
    .concernChild {
      display: flex;
      width: 88%;
      margin: auto 10px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
      }
      p {
        margin-top: 5px;
      }
      .time {
        font-size: 14px;
      }
    }
    .el-button {
      height: 40px;
      width: 100px;
    }
  }
}
</style>