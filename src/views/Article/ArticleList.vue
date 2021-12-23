<template>
  <div class="article_list">
    <div class="articleContainer">
      <el-card class="box-card" v-for="(item, index) in dataShow" :key="index">
        <div class="text item">
          <div class="itemImg">
            <router-link :to="{path: '/posts/'+item.id}">
              <img src="@/static/images/background.jpg" alt="">
              <span>{{item.type}}</span>
            </router-link>
          </div>
          <div class="article_information">
            <div class="header">
              <span v-for="(item1, index1) in item.tag" :key="index1" class="tag bg_skyblue">
                {{item1}}
              </span>
              <router-link :to="{path: '/posts/'+item.id}">
                <h3 @mouseover="mouseOver" @mouseleave="mouseLeave">{{item.title}}</h3>
              </router-link>
              <p>{{item.introduction}}</p>
            </div>
            <div class="message">
              <span class="el-icon-time">&nbsp;{{item.date}}</span>
              <span class="el-icon-view">&nbsp;{{item.browse}}</span>
              <span class="el-icon-time">&nbsp;{{item.praise}}</span>
              <span class="el-icon-chat-dot-square">&nbsp;{{item.comment}}</span>
            </div>
          </div>
        </div>
      </el-card>
        <el-pagination
          background
          @current-change="handelCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="list.length">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import articleList from '@/plugins/articleList.json'
export default {
  data() {
    return {
      isTheme: null,
      list: [], // 总数据
      newDate: '', // 获取当前时间戳
      pageSize: 10, // 每页显示条数
      currentPage: 1, // 当前页
      dataShow: [], // 当前显示数据
    }
  },
  created() {
    this.list = articleList.articleList;
    this.getPageData();
    this.newDate = new Date();
    let state = JSON.parse(localStorage.getItem('state'))
    this.isTheme = state.isTheme
  },
  methods: {
    getPageData() {
      let start = (this.currentPage - 1) * this.pageSize;
      let end = start + this.pageSize;
      this.dataShow = this.list.slice(start, end)
    },
    handelCurrentChange(val) {
      this.currentPage = val;
      this.getPageData()
    },
    mouseOver(e) {
      if(this.isTheme == false) {
        e.currentTarget.classList.add('skyblue')
      }else {
        e.currentTarget.classList.add('color_aqua')
      }
    },
    mouseLeave(e) {
      e.currentTarget.classList.remove('color_aqua')
      e.currentTarget.classList.remove('skyblue')
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: rgba($color: #fff, $alpha: 0.3);
  transition: all .2s ease-in;
  .text {
    font-size: 12px;
  }
  .item {
    height: 120px;
    display: flex;
    .itemImg {
      position: relative;
      height: 100%;
      overflow: hidden;
      margin-right: 10px;
      img {
        height: 100%;
      }
      span {
        position: absolute;
        left: 0;
        padding: 3px 5px;
        background-color: rgba(127, 255, 212, .5);
        color: #fff;
        transition: all .2s ease-in;
      }
    }
    .article_information {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        .tag {
          padding: 3px;
          margin-right: 10px;
          color: #fff;
          border-radius: 3px;
        }
        h3 {
          margin-top: 5px;
          font-size: 18px;
          transition: all .2s ease-in;
        }
      }
      .message {
        width: 100%;
        display: flex;
        justify-content: space-around;
        span {
          margin-right: 2rem;
          font-size: 13px;
        }
      }
    }
  }
}
.box-card:hover {
  background-color: rgba($color: #fff, $alpha: 0.8);
  .itemImg {
    span {
      background-color: rgba(127, 255, 212, .9);
    }
  }
}
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>